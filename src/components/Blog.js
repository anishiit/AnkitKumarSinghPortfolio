import Link from "next/link"

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Blog</h2>
        <p className="text-center text-gray-300 mb-8">Coming soon! I'll be sharing my thoughts and experiences here.</p>
        <div className="text-center">
          <Link
            href="#"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Check back later
          </Link>
        </div>
      </div>
    </section>
  )
}

