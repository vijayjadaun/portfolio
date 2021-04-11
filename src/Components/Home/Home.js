import React, { useEffect, useState } from 'react';
import  './Home.css';

const Home = () => {
    const changeNames = ["Vijay Jadaun", "Frontend Engineer","CSE Student"];
    const [changingText,setChangingText] = useState(0); 
    

    useEffect(() => {
    let interval = setInterval(() => {
         let temp = changingText;   
         temp === 2 ? setChangingText(0) : setChangingText(temp + 1);;
          
        }, 1400);
        
        return () => clearInterval(interval);

      }, [changingText]);

    return(
        <div className = "homeParentContainer" id = 'home'>
            <div className = "homeImage">
                <div className = "homeText">
                    <h2>Welcome!</h2>
                    <span className = "homeSpan" >I am </span>
                    <h3 className = "changingText">{changeNames[changingText]}</h3>
                </div>
            </div>
        </div>
    )
}

export default Home;