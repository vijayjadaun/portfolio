import React from 'react';
import './About.css';
import bgVid from '../Resources/pexels-pavel-danilyuk-5495899.mp4';


const About = () => {
    const about = "A result-oriented computer science engineering student who is interested in new technologies. I have a keen interest in web development and have made multiple projects associated with it. I fit well in a team and have also lead teams for multiple projects."
    return(
        <div id = 'about' className = "AboutContainer">
            <div className = "aboutMe">
                <h2>
                    About <br/>Me
                </h2>
                <p>
                    {about}
                </p>
            </div>
            <div className = "aboutPic">
                <video autoPlay loop muted id='bgVid'>
                    <source src={bgVid} type = 'video/mp4'/>
                </video>
            </div>
            <div className = "skills">
                <h2>
                    Skills
                </h2>
            <label htmlFor = "WebDevelopment">Web Development</label>
                <div id = "WebDevelopment"><div className = "webDevBar"/></div>
                <label htmlFor = "DataStructures">Data Structures</label>
                <div id = "DataStructures" ><div className = "dataStructureBar"/></div>    
                <label htmlFor = "Java">Java</label>
                <div id = "Java" ><div className = "javaBar"/></div>
                <label htmlFor = "ProblemSolving">Problem Solving</label>
                <div id = "ProblemSolving"><div className = "problemSolvingBar"/></div>
            </div>
        </div>
    );
}

export default About;