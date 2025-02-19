"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaCodepen } from "react-icons/fa"

const projects = [
  {
    title: "IMDB Sentiment Analysis",
    description: "Developed a machine learning model to analyze sentiment in IMDB movie reviews.",
    techStack: ["Python", "SVM", "NLP"],
    outcome: "90% accuracy in sentiment prediction",
    github: "https://github.com/username/imdb-sentiment",
  },
  {
    title: "Employee Data Analysis",
    description: "Analyzed employee data to derive insights on gender ratio and other metrics.",
    techStack: ["Tableau", "SQL", "Data Visualization"],
    outcome: "Uncovered key insights on gender distribution across departments",
    codepen: "https://codepen.io/username/pen/employee-data",
  },
]

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {expandedProject === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300 mb-4">{project.outcome}</p>
                    <div className="flex space-x-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <FaGithub size={24} />
                        </a>
                      )}
                      {project.codepen && (
                        <a
                          href={project.codepen}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <FaCodepen size={24} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
                <button
                  className="mt-4 text-blue-400 hover:text-blue-300"
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                >
                  {expandedProject === index ? "Show Less" : "Show More"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

