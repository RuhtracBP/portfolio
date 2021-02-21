import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import artist from '../img/artist-page.jpg'
import pokedex from '../img/pokedex-page.jpg'
import currency from '../img/currency-converter-page.PNG'
import spider from '../img/spider-page.jpg'

import github2 from '../svg/github2.svg'
import link from '../svg/weblink.svg'



function Projects() {
    return (
        <div className="projects" id="Project">
            <h2>Projects</h2>
            <div className="projects-container">
                <Carousel  className="projects-carousel" >
                    <div className="project-card ">
                        <a className="project-title" href="https://github.com/RuhtracBP/Artist-home-page" target="_blank" rel="noopener noreferrer" >
                            <img src={github2} alt="github"/>
                        </a>
                        <a className="project-title-2" href="https://artist-home-page-git-main.ruhtracbp.vercel.app" target="_blank" rel="noopener noreferrer" >
                            <img src={link} alt="github"/>
                        </a>
                        <img  src={artist} alt="artist" />
                    </div>
                    <div className="project-card">
                        <a className="project-title" href="https://github.com/RuhtracBP/simple-pokedex">
                            <img src={github2} alt="github"/>
                        </a>
                        <a className="project-title-2" href="https://simple-pokedex.ruhtracbp.vercel.app">
                            <img src={link} alt="github"/>
                        </a>
                        <img src={pokedex} alt="pokedex"/>
                    </div>
                    <div className="project-card">
                        <a className="project-title" href="https://github.com/RuhtracBP/currency-converter" target="_blank" rel="noopener noreferrer">
                            <img src={github2} alt="github"/>
                        </a>
                        <a className="project-title-2" href="http://currency-converter.ruhtracbp.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={link} alt="github"/>
                        </a>
                        <img src={currency} alt="currency converter"/>
                    </div>
                    <div className="project-card">
                        <a className="project-title" href="https://github.com/RuhtracBP/spiderman-MilesMorales" target="_blank" rel="noopener noreferrer">
                            <img src={github2} alt="github"/>
                        </a>
                        <a className="project-title-2" href="http://spiderman-miles-morales.ruhtracbp.vercel.app/">
                            <img src={link} alt="github"/>
                        </a>
                        <img src={spider} alt="spider man"/>
                    </div>
                </Carousel>
                
                
            </div>
        </div>
    )
}

export default Projects
