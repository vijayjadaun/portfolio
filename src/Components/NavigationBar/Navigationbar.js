import React from "react";
import "./Navigationbar.css";

const NavigationBar = () => {
  
  const handleAbout = () => {
    const aboutAnchor = document.querySelector('#about');
    aboutAnchor.scrollIntoView({ behavior: 'smooth', block:'end' });
  }
  const handleHome = () => {
    const aboutAnchor = document.querySelector('#home');
    aboutAnchor.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
  const handleExperience = () => {
    const aboutAnchor = document.querySelector('#experience');
    aboutAnchor.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
  const handleContact = () => {
    const aboutAnchor = document.querySelector('#contact');
    aboutAnchor.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }


  return (
    <div className="NavContainer">
      <div className="navTitle">
        <h2 onClick = {handleHome}>Vijay</h2>
      </div>
      <nav className="navLinks">
        <h3 onClick = {handleHome}>Home</h3>
        <h3 onClick = {handleAbout}>About</h3>
        <h3 onClick = {handleExperience}>Experience</h3>
        <h3 onClick = {handleContact}>Contact</h3>
      </nav>
    </div>
  );
};

export default NavigationBar;
