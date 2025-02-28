// App.js
import React, {useEffect, useState} from 'react';
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import "./App.css"
import {Service} from "./components/Service.jsx";
import WhyUsSection from "./components/WhyUsSection.jsx";
import AboutStats from "./components/AboutStats.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import {SeoLanding} from "./components/SeoLanding.jsx";
import {HelmetProvider} from "react-helmet-async";

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const helmetContext = {};
    return (
        <div>
            <HelmetProvider context={helmetContext}>
            <SeoLanding/>
            <Header scrolled={scrolled}/>
            <Hero/>
            <AboutStats/>
            <AboutUs/>
            <Service/>
            <ProjectsSection/>
            <WhyUsSection/>
            <ContactSection/>
            <Footer/>
            </HelmetProvider>
        </div>
    );
}

export default App;