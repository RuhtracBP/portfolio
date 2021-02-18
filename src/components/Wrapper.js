import React from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'

function Wrapper() {
    return (
        <>

            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >


            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />

            
        </>
    )
}

export default Wrapper
