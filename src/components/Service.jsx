import { Code, Globe, Cpu,Smartphone,Laptop,Gauge } from "lucide-react";
import "../styles/service.css";
import AnimatedContent from "../blocks/Animations/AnimatedContent/AnimatedContent.jsx";
export const Service = () => {
    const services = [
        {
            icon: <Code className="service-icon" />,
            title: "Desarrollo de Software",
            description: "Creamos soluciones personalizadas que se adaptan perfectamente a tus necesidades específicas."
        },
        {
            icon: <Globe className="service-icon" />,
            title: "Desarrollo Web",
            description: "Diseñamos y desarrollamos sitios web modernos y aplicaciones web escalables."
        },
        {
            icon: <Cpu className="service-icon" />,
            title: "Consultoría Tecnológica",
            description: "Asesoramos en la implementación de soluciones tecnológicas para optimizar tu negocio."
        },
        {
            icon: <Smartphone className="w-8 h-8 text-[#00A0E9]" />,
            title: "Desarrollo Móvil",
            description: "Aplicaciones nativas y multiplataforma para iOS y Android.",
        },
        {
            icon: <Laptop className="w-8 h-8 text-[#00A0E9]" />,
            title: "Software Empresarial",
            description:
                "Soluciones personalizadas para optimizar procesos empresariales.",
        },
        {
            icon: <Gauge className="w-8 h-8 text-[#00A0E9]" />,
            title: "DevOps",
            description: "Implementación y gestión de infraestructura cloud y CI/CD.",
        },
    ];

    return (
        <>
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
                <section id="services">
                    <div className="services-container">
                        <h2 className="services-title">Nuestros Servicios</h2>
                        <div className="services-grid">
                            {services.map((service, index) => (
                                <div key={index} className="service-card">
                                    <div className="service-icon-container">
                                        {service.icon}
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedContent>
        </>

    );
};