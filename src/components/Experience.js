"use client"

import { motion } from "framer-motion"

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
        <motion.div
          className="bg-gray-700 rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">MyAnalytics School</h3>
          <p className="text-gray-300 mb-4">Data Science Intern | May 2023 - July 2023</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Conducted SAM analysis to identify potential market opportunities</li>
            <li>Developed and implemented growth strategies resulting in a 5% increase in user engagement</li>
            <li>Doubled the reach of marketing campaigns through data-driven optimization</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Data Analysis</span>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Growth Hacking</span>
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Marketing Strategy</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

