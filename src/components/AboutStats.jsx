import React from 'react';
import { Rocket, Users, Star } from 'lucide-react';
import '../styles/AboutStats.css';
import AnimatedContent from "../blocks/Animations/AnimatedContent/AnimatedContent.jsx";
import CountUp from "../TextAnimations/CountUp/CountUp.js";

const AboutStats = () => {
    const stats = [
        {
            icon: <Rocket className="stats-icon" />,
            value: "40+",
            label: "Proyectos Completados"
        },
        {
            icon: <Users className="stats-icon" />,
            value: "20+",
            label: "Clientes Satisfechos"
        },
        {
            icon: <Star className="stats-icon" />,
            value: "99%",
            label: "Tasa de Satisfacción"
        }
    ];

    return (
        <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{tension: 80, friction: 20}}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
        >
        <section id="about" className="about-stats">
            <h2 className="services-title">Quiénes Somos</h2>
            <div className="stats-container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stats-card">
                            {stat.icon}
                            <h3>
                            <CountUp
                                from={0}
                                to={stat.value}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                                {stat.label==="Tasa de Satisfacción"? "%" : ""}
                           </h3>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </AnimatedContent>
    );
};

export default AboutStats;