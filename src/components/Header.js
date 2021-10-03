import React from 'react';
import '../styles/main.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserGraduate, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    // input htmlcode here
    return (
        <header style={{margin: 'auto', maxWidth: 700, position: 'relative'}}>
            <a href='/' class='noLinkStyle' style={{fontSize:24, fontWeight:'bolder'}}>Celina Lind</a>
            <section class="navLinks">
            <a href='/about-me' class='noLinkStyle hover'>About Me</a>
            <a href='/contact-me' class='noLinkStyle hover'>Contact</a>
            {/* <a href='' class='noLinkStyle hover'>Resume</a> */}
            </section>
            <section className='mediaLinks'>

            </section>
        </header>
    );
}