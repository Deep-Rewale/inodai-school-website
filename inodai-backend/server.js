const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const Form = require("./models/form")
const dns = require("dns");
const { google } = require("googleapis")

// change the dns
dns.setServers(["1.1.1.1", "8.8.8.8"])
require("dotenv").config();
const app = express();

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const URL_ACCESS = process.env.URL_ACCESS;
const PORT = process.env.PORT || 5000;

// auth for google apis

const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
})

const sheets = google.sheets({ version: "v4", auth });



mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

app.use(cors({
  origin: URL_ACCESS
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("backend running")
})

app.post("/api/form", async (req, res) => {
    try {
        const newForm = new Form(req.body)
        await newForm.save()

        const {
            type,
            studentName,
            parentName,
            email,
            phone,
            program,
            subject,
            message,
        } = req.body;

        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: "Sheet1!A1",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [[
                    new Date().toLocaleString(),
                    type,
                    studentName,
                    parentName,
                    email,
                    phone,
                    program,
                    subject,
                    message,
                ]]

            }
        })

        res.json({ message: "Saved " });
    } catch {
        res.status(500).json({ error: "error while saving data" })
    }
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
