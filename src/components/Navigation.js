import { useState, useEffect } from 'react'

const Navigation = () => {
    return (
        <nav className="Navigation">
            <ul id="navLinks">
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
