const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const Form = require("./models/form")
const dns = require("dns");

// change the dns
dns.setServers(["1.1.1.1", "8.8.8.8"])
require("dotenv").config();
const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("backend running")
})

app.post("/api/form", async (req, res) => {
    try {
        const newForm = new Form(req.body)
        await newForm.save()
        res.json({ message: "Saved ✅" });
    } catch {
        res.status(500).json({ error: "error while saving data" })
    }
})

app.listen(5000, () => {
    console.log("server running on port 5000")
})
