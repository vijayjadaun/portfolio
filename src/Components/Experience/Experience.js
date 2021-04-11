import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="expContainer" id = 'experience'>
      <h2>Experience</h2>
      <div className="expList">
        <ul className = "expUl">
          <li style = {{color:"#c49b66"}}>Frontend feature development internship at BOSC Techlab</li>
          <ul style = {{marginTop:"1%"}}>
            <li>React.js</li>
            <li>Redux</li>
            <li>JWT</li>
            <li>Asynchronous Programming</li>
          </ul>

          <li style = {{marginTop:"5%",color:"#c49b66"}}>Quote Posting and Sharing App (Project)</li>
          <ul style = {{marginTop:"1%"}}>
            <li>React.js</li>
            <li>Node and Express</li>
            <li>MongoDB and Mongoose</li>
            <li>JWT</li>
            <li>Cloud Image Storage</li>
          </ul>
        </ul>
        <ul className = "expUl expUlAdd">
          <li style = {{color:"#c49b66"}}>Mobile Application for Storage Solutions (Ongoing Project)</li>
          <ul style = {{marginTop:"1%"}}>
            <li>React native</li>
            <li>Node and Express</li>
            <li>React</li>
            <li>Asynchronous Programming</li>
          </ul>

          <li style = {{marginTop:"5%",color:"#c49b66"}}>Web App to share documents in a group with high organisation (Ongoing Project)</li>
          <ul style = {{marginTop:"1%"}}>
            <li>React.js</li>
            <li>Node and Express</li>
            <li>MongoDB and Mongoose</li>   
            <li>Cloud Image Storage</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
