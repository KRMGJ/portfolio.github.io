import Certificates from '@/components/Certificates'
import Education from '@/components/Education'
import Experiences from '@/components/Experiences'
import Hero from '@/components/Hero'
import HowIWork from '@/components/HowIWork'
import Line from '@/components/Line'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { Contact } from 'lucide-react'

export default function Main() {
    return (
        <>
            <Hero />
            <Education />
            <Certificates />
            <Skills />
            <Line />
            <Projects />
            <Experiences />
            <HowIWork />
            <Line />
            <Contact />
        </>
    )
}
