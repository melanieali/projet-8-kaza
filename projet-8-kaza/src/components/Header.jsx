import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/logo.png'


function Header() {

    return (
        <nav id='header'>
            <img src={logo} alt='kaza' className='img-logo'/>
            <div id='lien'>
            <NavLink className={({isActive}) => isActive ? 'nav-active nav':'nav'} to="/">Accueil</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav-active nav':'nav'} to="/apropos">A propos</NavLink>
            </div>
        </nav>
    )
}

export default Header