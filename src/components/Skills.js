"use client"

import { motion } from "framer-motion"
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaChartBar,
  FaMicrophone,
  FaUsers,
  FaSyncAlt,
  FaFileExcel,
  FaFilePowerpoint,
} from "react-icons/fa"
import { SiCplusplus, SiTableau, SiCanva } from "react-icons/si"

const skills = [
  { name: "Python", icon: FaPython },
  { name: "C++", icon: SiCplusplus },
  { name: "Machine Learning", icon: FaReact },
  { name: "SQL", icon: FaDatabase },
  { name: "Data Visualization", icon: FaChartBar },
  { name: "Tableau", icon: SiTableau },
  { name: "Public Speaking", icon: FaMicrophone },
  { name: "Team Management", icon: FaUsers },
  { name: "Adaptability", icon: FaSyncAlt },
  { name: "Excel", icon: FaFileExcel },
  { name: "PowerPoint", icon: FaFilePowerpoint },
  { name: "Canva", icon: SiCanva },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="text-4xl mb-4 text-blue-400"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <skill.icon />
              </motion.div>
              <p className="text-center text-sm">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

