import Hero from '@/components/Hero'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import Eligibility from '@/components/Eligibility'
import Selection from '@/components/Selection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
      <Hero />
      <About />
      <HowItWorks />
      <Eligibility />
      <Selection />
      <Contact />
      <Footer />
    </main>
  )
}