"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Dr. Jane Smith",
    role: "Professor, IIT(ISM) Dhanbad",
    content:
      "Ankit is a brilliant student with a keen interest in electronics and data science. His ability to grasp complex concepts quickly is impressive.",
  },
  {
    name: "John Doe",
    role: "Senior Data Scientist, Tech Corp",
    content:
      "I had the pleasure of mentoring Ankit during his internship. His enthusiasm and quick learning abilities make him a valuable asset to any team.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

