"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Image
            src="/image.jpg"
            alt="Ankit Kumar Singh"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ankit Kumar Singh</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Electronics & Data Science Enthusiast</p>
          <div className="flex justify-center space-x-4 mb-8">
            <Link href="https://linkedin.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              <FaLinkedin size={32} />
            </Link>
            <Link href="https://github.com" className="text-gray-400 hover:text-gray-300 transition-colors">
              <FaGithub size={32} />
            </Link>
            <Link href="mailto:ankit@example.com" className="text-red-400 hover:text-red-300 transition-colors">
              <FaEnvelope size={32} />
            </Link>
          </div>
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-orange-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

