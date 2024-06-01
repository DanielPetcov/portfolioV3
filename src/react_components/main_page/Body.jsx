import About from './body_components/About'
import Greeting from './body_components/Greeting'
import Projects from './body_components/Projects'
import Skills from './body_components/Skills'
import Contact from './body_components/Contact'

export default function Body(){ 
    return <div className="body">
        <Greeting />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </div>
}