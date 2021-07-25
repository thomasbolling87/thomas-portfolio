import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
    return (
       <header className="navBar">
           <div className="container">
               <nav className="navLinks">
                   <NavLink className="home" to="/" exact>
                       Home
                   </NavLink>
                   <NavLink className="aboutMe" to="/aboutme">
                       About Me
                   </NavLink>
                   <NavLink className="projects" to="/projects">
                       Projects
                   </NavLink>
                   <NavLink className="contact" to="/contact">
                       Contact
                   </NavLink>
               </nav>
               <div className="socials">
                    <SocialIcon url="https://github.com/thomasbolling87" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://www.linkedin.com/in/thomas-bolling-04a7681a1/" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
               </div>
           </div>
       </header>
    )
}

export default NavBar
