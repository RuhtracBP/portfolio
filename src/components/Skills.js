import React from 'react'

import html from '../svg/html.svg'
import css from '../svg/css.svg'
import js from '../svg/javascript.svg'
import sass from '../svg/sass.svg'
import react from '../svg/react.svg'
import node from '../svg/node.svg'
import git from '../svg/git.svg'

function Skills() {
    return (
        <div>
            <div className="skills-container">
                <h2>Skills</h2>
                <div className="skills-list">
                    <img className="html" src={html} alt="html"/>
                    <img className="css" src={css} alt="css"/>
                    <img className="javascript" src={js} alt="javascript"/>
                    <img className="sass" src={sass} alt="sass"/>
                    <img className="react" src={react} alt="react"/>
                    <img className="node" src={node} alt="node"/>
                    <img className="git" src={git} alt="git"/>
                </div>
                    
            </div>
        </div>
    )
}

export default Skills
