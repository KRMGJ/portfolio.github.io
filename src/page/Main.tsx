import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Experiences from '@/components/Experiences'
import Hero from '@/components/Hero'
import HowIWork from '@/components/HowIWork'
import Line from '@/components/Line'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Main() {
    return (
        <>
            <Hero />
            <Education />
            <Line />
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
