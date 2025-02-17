import React from 'react';
import { Rocket, Users, Star } from 'lucide-react';
import '../styles/AboutStats.css';

const AboutStats = () => {
    const stats = [
        {
            icon: <Rocket className="stats-icon" />,
            value: "150+",
            label: "Proyectos Completados"
        },
        {
            icon: <Users className="stats-icon" />,
            value: "50+",
            label: "Clientes Satisfechos"
        },
        {
            icon: <Star className="stats-icon" />,
            value: "98%",
            label: "Tasa de Satisfacción"
        }
    ];

    return (
        <section id="about" className="about-stats">
            <h2 className="services-title">Quiénes Somos</h2>
            <div className="stats-container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stats-card">
                            {stat.icon}
                            <h3>{stat.value}</h3>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutStats;