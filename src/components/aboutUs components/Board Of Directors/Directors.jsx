import React, { useState } from 'react'
import BinduChowdary from "../../../assets/About us/Board-of-directors/founders/Bindu-chowdary.jpg"
import SeshadriDesikan from "../../../assets/About us/Board-of-directors/founders/Seshadri-Desikan.jpg"
import ManaliMehta from "../../../assets/About us/Board-of-directors/founders/Manali-Mehta.avif"
import PadminiSeshadri from "../../../assets/About us/Board-of-directors/founders/Padmini-seshadri.jpg"
import { motion, AnimatePresence } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};


const directors = [
    {
        name: "Bindu Chowdary",
        role: "Founder Director",
        image: BinduChowdary,
        short:
            "Dr. Bindu Chowdary holds advanced degrees in Political Science and Sociology and has dedicated her life to education and Waldorf pedagogy.",
        full:
            "With decades of experience as a college principal and academic mentor, she has played a pivotal role in shaping Waldorf education in Mumbai. She has conducted international workshops, participated in global seminars and continues to mentor teachers and guide language education at Inodai Waldorf School.",
    },
    {
        name: "Seshadri Desikan",
        role: "Founder Director",
        image: SeshadriDesikan,
        short:
            "An engineer by training, Seshadri Desikan discovered Waldorf education in 2000 and has since been deeply involved in its growth in India.",
        full:
            "He teaches Physics and Chemistry, mentors grade teachers and serves on multiple Waldorf education forums. He actively contributes to curriculum development and teacher training programs across the country.",
    },
    {
        name: "Manali Mehta",
        role: "Founder Director",
        image: ManaliMehta,
        short:
            "A science graduate with a B.Ed., Manali Mehta has extensive experience in high school education and preschool leadership.",
        full:
            "She has organized and conducted numerous sessions on Waldorf education and continues to contribute to early childhood development initiatives within the school community.",
    },
    {
        name: "Padmini Seshadri",
        role: "Founder Director",
        image: PadminiSeshadri,
        short:
            "Padmini Seshadri’s journey in social work and Waldorf education spans decades across India and Europe.",
        full:
            "She has trained extensively in Waldorf pedagogy, biodynamic farming and biography work. Currently, she mentors teachers, leads outdoor education and conducts workshops internationally.",
    },
];


const Directors = () => {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section className='py-24  '>
            <div className='max-w-7xl mx-auto p-6 space-y-24'>
                {directors.map((item, index) => {
                    const isReversed = index % 2 !== 0
                    return (
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }} key={index} className={`grid md:grid-cols-2 grid-cols-1 gap-10 items-center  ${isReversed ? "md:[&>*:first-child]:order-2" : ""}`}>
                            {/* director image */}
                            <div className="rounded-2xl overflow-hidden shadow-lg ">
                                <img className='w-full h-[480px] object-cover' src={item.image} alt={item.name} />
                            </div>
                            {/* content  */}

                            <div className='space-y-5'>
                                <h3 className='font-heading text-primary text-3xl font-semibold'>{item.name}</h3>
                                <p className='text-accent font-body font-medium text-lg max-w-2xl'>{item.role}</p>
                                <p className='text-gray-700 font-body text-base max-w-2xl'>{item.short}</p>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="text-gray-600 font-body leading-relaxed overflow-hidden"
                                        >
                                            {item.full}
                                        </motion.p>
                                    )}
                                </AnimatePresence>

                                <button
                                    onClick={() =>
                                        setOpenIndex(openIndex === index ? null : index)
                                    }
                                    className="text-primary font-semibold hover:underline gap-3 flex items-center"
                                >
                                    {openIndex === index ? "Read Less" : "Read More"}
                                    <span className={`${openIndex === index ? "rotate-180" : "rotate-0"}`}><IoIosArrowDown size={20} /></span>
                                </button>

                            </div>






                        </motion.div>

                    )
                })}
            </div>
        </section>
    )
}

export default Directors