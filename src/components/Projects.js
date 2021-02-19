import React from 'react'
import ReactDOM from 'react-dom'

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
        <div className="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                <Carousel  className="projects-carousel" >
                    <div className="project-card ">
                        <a className="project-title" href="/">
                            <img src={github2} alt="github"/>
                        </a>
                        <a className="project-title-2" href="/">
                            <img src={link} alt="github"/>
                        </a>
                        <img href="/" src={artist} alt="artist" />
                    </div>
                    <div className="project-card">
                        <a className="project-title" href="/">
                            <img src={github2} alt="github"/>
                        </a>
                        <a className="project-title-2" href="/">
                            <img src={link} alt="github"/>
                        </a><a className="project-title" href="/"></a>
                        <img src={pokedex} alt="artist"/>
                    </div>
                    <div className="project-card">
                        <a className="project-title" href="/">
                            <img src={github2} alt="github"/>
                        </a>
                        <a className="project-title-2" href="/">
                            <img src={link} alt="github"/>
                        </a>
                        <img src={currency} alt="artist"/>
                    </div>
                    <div className="project-card">
                        <a className="project-title" href="/">
                            <img src={github2} alt="github"/>
                        </a>
                        <a className="project-title-2" href="/">
                            <img src={link} alt="github"/>
                        </a>
                        <img src={spider} alt="artist"/>
                    </div>
                </Carousel>
                
                
            </div>
        </div>
    )
}

export default Projects
