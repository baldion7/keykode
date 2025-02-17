import React from 'react';
import { Users, Rocket, MessageSquare } from 'lucide-react';
import '../styles/WhyUsSection.css';
import AnimatedContent from "../blocks/Animations/AnimatedContent/AnimatedContent.jsx";

const WhyUsSection = () => {
    const features = [
        {
            icon: <Users className="feature-icon" />,
            title: "Equipo Experto",
            description: "Profesionales altamente calificados con años de experiencia"
        },
        {
            icon: <Rocket className="feature-icon" />,
            title: "Innovación Constante",
            description: "Siempre a la vanguardia de las últimas tecnologías"
        },
        {
            icon: <MessageSquare className="feature-icon" />,
            title: "Comunicación Clara",
            description: "Mantenemos un diálogo constante durante todo el proceso"
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
        <section id="why-us" className="why-us-section">
            <div className="why-us-container">
                <div className="why-us-header">
                    <h2>¿Por qué elegir KeyKode?</h2>
                    <p>Combinamos experiencia técnica con un profundo entendimiento de los negocios</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="feature-icon-container">
                                {feature.icon}
                            </div>
                            <div className="feature-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </AnimatedContent>
    );
};

export default WhyUsSection;