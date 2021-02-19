import React from 'react'
import Logo from '../svg/logo.svg'

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-container">
                <img className="logo-svg" src={Logo} alt="teste"/>

                <navbar className="menu">
                    <ul className="menu-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Skills</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>            
                </navbar>
            </div>
                
            
        </div>
    )
}

export default Topbar
