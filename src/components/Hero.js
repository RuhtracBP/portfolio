import React from 'react';
import TextEffect from './TextEffect';

function Hero() {
    return (
        <div className="hero-container">
            <h1 className="hero-title">Hello, i'm <span>Arthur Borges Pereira</span></h1>
            <h3 className="hero-subtitle">I'm a  <TextEffect /> </h3>
            <div className="hero-buttons">
                <button className="hero-btn-contact">Contact me</button>
                <button className="hero-btn-work">See my work</button>
            </div>
        </div>
    )
}

export default Hero
