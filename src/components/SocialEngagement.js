"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"

const engagements = [
  {
    title: "General Secretary",
    organization: "Student Council",
    description: "Led initiatives to improve student life and campus facilities.",
  },
  {
    title: "Marketing Head",
    organization: "Concetto'25",
    description: "Spearheaded marketing campaigns for the annual tech fest.",
  },
  {
    title: "Event Coordinator",
    organization: "Basant 24",
    description: "Organized and managed cultural events during the spring festival.",
  },
  {
    title: "Team Lead",
    organization: "Hackfest",
    description: "Led a team of developers in a 24-hour hackathon.",
  },
]

export default function SocialEngagement() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <section id="social" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Leadership & Social Engagement</h2>
        <div className="space-y-4">
          {engagements.map((engagement, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{engagement.title}</span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 bg-gray-600">
                      <p className="text-gray-300 mb-2">{engagement.organization}</p>
                      <p className="text-gray-400">{engagement.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

