"use client"

import { motion } from "framer-motion"
import { FaMedal, FaTrophy, FaAward } from "react-icons/fa"

const achievements = [
  {
    title: "JEE Advanced",
    description: "Ranked in the top 0.1% among 200,000+ candidates",
    icon: FaMedal,
  },
  {
    title: "NTSE Scholar",
    description: "National Talent Search Examination Scholarship recipient",
    icon: FaTrophy,
  },
  {
    title: "Spotify PM Competition",
    description: "Finalist in the national-level product management competition",
    icon: FaAward,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <achievement.icon className="text-4xl text-yellow-400 mr-4" />
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
              </div>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

