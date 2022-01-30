
import classes from './MainNavigation.module.css'
import {useEffect, useState} from 'react';
import React from 'react'

function MainNavigation(){
const [navIsSolid, setNavIsSolid] = useState('opaque');

const navRef = React.useRef()
navRef.current = navIsSolid

useEffect(() => {
    const handleScroll = () => {
        const show = window.scrollY > 50
        if (show){
            setNavIsSolid('opaque')
        }
        else{
            setNavIsSolid('transparent')
        }
    }
    document.addEventListener('scroll',handleScroll)
    return() => {
        document.removeEventListener('scroll', handleScroll)
    }
})

return <header className = {classes[navRef.current]}>
    <nav>
        <ul>
            <li>
                <a href='#'>Home</a>
            </li>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#activities">Activities</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </nav>
</header>
}

export default MainNavigation;