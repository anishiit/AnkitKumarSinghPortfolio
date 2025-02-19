import Hero from "../components/Hero"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Achievements from "../components/Achievements"
import SocialEngagement from "../components/SocialEngagement"
import Contact from "../components/Contact"
import Blog from "../components/Blog"
import Testimonials from "../components/Testimonials"

export default function Home() {
  return (
    <div className="space-y-24">
      <section data-scroll-section>
        <Hero />
      </section>
      <section data-scroll-section>
        <Education />
      </section>
      <section data-scroll-section>
        <Experience />
      </section>
      <section data-scroll-section>
        <Projects />
      </section>
      <section data-scroll-section>
        <Skills />
      </section>
      <section data-scroll-section>
        <Achievements />
      </section>
      <section data-scroll-section>
        <SocialEngagement />
      </section>
      <section data-scroll-section>
        <Contact />
      </section>
      <section data-scroll-section>
        <Blog />
      </section>
      <section data-scroll-section>
        <Testimonials />
      </section>
    </div>
  )
}

