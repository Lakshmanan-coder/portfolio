import About from '@/components/about'
import Experience from '@/components/experince'
import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'
import Contact from '@/components/contact'
import Skills from '@/components/skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Skills/>
      <Experience/>
      <Contact/>
    </main>
  )
}
