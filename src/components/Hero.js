import React from 'react';
import TextEffect from './TextEffect';
import github from '../svg/github.svg';
import linkedin from '../svg/linkedin.svg';
import mail from '../svg/mail.svg';


function Hero() {
    return (
        <div className="hero-container" id="Hero">
            <h1 className="hero-title">Hello, i'm <span>Arthur Borges Pereira</span></h1>
            <h3 className="hero-subtitle">I'm a  <TextEffect  /> </h3>
            <div className="hero-buttons">
                <button href="#Contact" className="hero-btn-contact hbtn hb-fill-middle2-rev">Contact me</button>
                <button href="https://github.com/RuhtracBP?tab=repositories" rel="noopener noreferrer" target="_blank" className="hero-btn-work hbtn hb-fill-middle2">See my work</button>
            </div>
            <div className="contacts">
                <a href="https://www.linkedin.com/in/arthurcbp" rel="noopener noreferrer" target="_blank" ><img src={linkedin} alt="linkedin"/></a>
                <a href="https://github.com/RuhtracBP" rel="noopener noreferrer" target="_blank"><img src={github} alt="github"/></a>
                <a href = "mailto: arthurhcbp@gmail.com" ><img src={mail} alt="email"/></a>
            </div>
        </div>
    )
}

export default Hero
