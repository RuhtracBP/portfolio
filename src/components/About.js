import React from 'react';
import location from '../svg/locationTag.svg';
import language from '../svg/languageTag.svg';
import user from '../svg/userTag.svg';

function About() {
    return (
        <div>
            <div className="card">
                <h2 className="about-title">About</h2>
                <p className="about-paragraph">
                    Hy, I'm a front end and full stack developer. I have a passion for technologies and allways
                    search for new and inovative ways to create build and maintain great ideas. Building web
                    and mobile applications i developed a liking to UI/UX and been improving in that aspect too.
                    Seeing the growth of the internet, security comes to mind, so i'm researching about Cybersecurity.
                </p>
                <ul className="about-list">
                    <li><img src={location} alt="location"/> Recife, Pernambuco, Brazil</li>
                    <li><img src={language} alt="language"/> Portuguese, English</li> 
                    <li><img src={user} alt="user"/> Arthur Carlos Borges Pereira</li>
                </ul>
            </div>
        </div>
    )
}

export default About



/* 

    Hy, I'm a front end and full stack developer. I have a passion for technologies and allways
    search for new and inovative ways to create build and maintain great ideas.


*/