import React from 'react';
import { slide as Menu } from 'react-burger-menu';


export default props => {
    return (
        <Menu>
            <a href="#">Home</a>
            <a href="#About">About</a>
            <a href="#Projects">Projects</a>
            <a href="#Skills">Skills</a>
            <a href="#Contact">Contact</a>
        </Menu>
    );
};