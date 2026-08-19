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
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <About/>
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <Eligibility />
      </Reveal>
      <Reveal>
        <Selection />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Reveal>  
        <Footer />
      </Reveal>
    </main>
  )
}