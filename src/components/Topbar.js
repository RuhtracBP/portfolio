import React, { useState, useCallback } from 'react';
import Logo from '../svg/logo.svg';
import Sidebar from './Sidebar';
 
function Topbar() {


    return (
        <div className="topbar">
            <div className="topbar-container">
                <img className="logo-svg" src={Logo} alt="teste"/>

                <nav className="menu" id="outer-continer">
                    <Sidebar id="opa" outerContainerId={'outer-container'} />

                    

                    <ul className="menu-list">
                        <li><a className="from-top" href="#">Home</a></li>
                        <li><a className="from-top" href="#About">About</a></li>
                        <li><a className="from-top" href="#Project">Projects</a></li>
                        <li><a className="from-top" href="#Skills">Skills</a></li>
                        <li><a className="from-top" href="#Contact">Contact</a></li>
                    </ul>            
                </nav>
            </div>
                
            
        </div>
    )
}

export default Topbar
