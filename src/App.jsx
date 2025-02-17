// App.js
import React, {useEffect, useState} from 'react';
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import "./App.css"
import {Service} from "./components/Service.jsx";
import WhyUsSection from "./components/WhyUsSection.jsx";
import AboutStats from "./components/AboutStats.jsx";
import AboutUs from "./components/AboutUs.jsx";


function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Header scrolled={scrolled}/>
            <Hero/>
            <AboutStats/>
            <AboutUs/>
            <Service/>
            <WhyUsSection/>

        </div>
    );
}

export default App;