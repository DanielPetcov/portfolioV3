import '../../style/navbar/navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


export default function NavBar(){
    const [linksActive, setLinksActive] = useState(false);
    
    const changeState = () => {
        setLinksActive(!linksActive)
    }

    return <div className="navbar-container">
        <div className='navbar'>
        <div className='burger-lines' onClick={changeState}><FontAwesomeIcon icon={faBars} /></div>
        <div className="logo">
            <span><a href="#">Daniel Petcov</a></span>
        </div>
        <div className={`links ${linksActive ? 'active' : ''}`}>
            <ul>
                <li><a href="#greeting">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Portfolio</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
        </div>
    </div>
    </div>
}