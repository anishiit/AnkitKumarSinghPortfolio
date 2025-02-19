"use client"

import { motion } from "framer-motion"

const educationData = [
  {
    institution: "IIT(ISM) Dhanbad",
    degree: "B.Tech in Electronics and Communication Engineering",
    date: "2021 - Present",
    gpa: "GPA: 9.5/10",
  },
  {
    institution: "Nalanda Academy",
    degree: "Intermediate (12th)",
    date: "2019 - 2021",
    gpa: "Percentage: 95%",
  },
  {
    institution: "Fiitjee World School",
    degree: "Matriculation (10th)",
    date: "2017 - 2019",
    gpa: "CGPA: 10/10",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg max-w-md">
                <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
                <p className="text-gray-300 mb-2">{edu.degree}</p>
                <p className="text-gray-400 mb-2">{edu.date}</p>
                <p className="text-gray-400">{edu.gpa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

