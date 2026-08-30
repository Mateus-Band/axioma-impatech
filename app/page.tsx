import Hero from '@/components/Hero'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import Eligibility from '@/components/Eligibility'
import Selection from '@/components/Selection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

export default function Home() {
  return (
    <main className="bg-background text-text">
      <div id="hero">
        <Reveal>
          <Hero />
        </Reveal>
      </div>

      <div id="about">
        <Reveal>
          <About />
        </Reveal>
      </div>

      <div id="how-it-works">
        <Reveal>
          <HowItWorks />
        </Reveal>
      </div>

      <div id="eligibility">
        <Reveal>
          <Eligibility />
        </Reveal>
      </div>

      <div id="selection">
        <Reveal>
          <Selection />
        </Reveal>
      </div>

      <div id="contact">
        <Reveal>
          <Contact />
        </Reveal>
      </div>

      <div id="footer">
        <Reveal>
          <Footer />
        </Reveal>
      </div>
    </main>
  )
}