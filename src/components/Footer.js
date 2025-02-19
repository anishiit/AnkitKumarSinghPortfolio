import Link from "next/link"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Ankit Kumar Singh. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com" className="hover:text-gray-400 transition-colors">
              <FaGithub size={24} />
            </Link>
            <Link href="mailto:ankit@example.com" className="hover:text-red-400 transition-colors">
              <FaEnvelope size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

