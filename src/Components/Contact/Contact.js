import React from 'react';
import './Contact.css';
import fbLogo from '../Resources/facebook-6-512.png';
import linkedInLogo from '../Resources/linkedin-6-512.png';
import instaLogo from '../Resources/instagram-6-512.png';
import githubLogo from '../Resources/github-11-512.png';
import snapLogo from '../Resources/snapchat-512.png';
import skypeLogo from '../Resources/skype-6-512.png';

const Contact = () => {
    return(
        <div  id = 'contact' className = 'contactContainer'>
            
            <div className = "contactUsInfo">
                <h2>Contact</h2>
                <div className = "contactIcons">
                    <a href = 'https://www.linkedin.com/in/vijay-jadaun-4b623b172/' target = '_blank' rel="noreferrer"><img src = {linkedInLogo} alt = 'linked in' /></a>
                    <a href = 'https://join.skype.com/invite/v8LHDWZ8KrnP' target = '_blank' rel="noreferrer"><img src = {skypeLogo} alt = 'skype' /></a>
                    <a href = 'https://github.com/vijayjadaun' target = '_blank' rel="noreferrer"><img src = {githubLogo} alt = 'github' /></a>
                    <a href = 'https://www.facebook.com/vijay.invictus9' target = '_blank' rel="noreferrer"><img src = {fbLogo} alt = 'facebook' /></a>
                    <a href = 'https://www.instagram.com/vijay_jadaun/' target = '_blank' rel="noreferrer"><img src = {instaLogo} alt = 'instagram' /></a>
                    <a href = 'https://www.snapchat.com/add/vijay_jadaun' target = '_blank' rel="noreferrer"><img src = {snapLogo} alt = 'snapchat' /></a>
                </div>
                <h3>Email : <span>vijayjv9@gmail.com</span></h3>
            </div>
            
        </div>

    )
}

export default Contact;