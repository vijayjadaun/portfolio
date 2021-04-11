import React from 'react';
import Home  from './Home/Home';
import NavigationBar from './NavigationBar/Navigationbar';
import About from './About/About';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';

const Index = () => {
    return(
        <div >
            <NavigationBar/>
            <Home/>
            <About />
            <Experience/>
            <Contact/>
        </div>
    );

}

export default Index;