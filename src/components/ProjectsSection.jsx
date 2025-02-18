import {ExternalLink} from 'lucide-react';
import '../styles/ProjectsSection.css';
import AnimatedContent from "../blocks/Animations/AnimatedContent/AnimatedContent.jsx";

const ProjectsSection = () => {
    const projects = [
        {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            title: "Sistema de Gestión Empresarial",
            description: "Plataforma integral para la gestión de recursos y procesos empresariales.",
            tags: ["React", "Node.js", "PostgreSQL"]
        },
        {
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            title: "App de Comercio Electrónico",
            description: "Solución completa de e-commerce con gestión de inventario y pagos.",
            tags: ["Next.js", "Stripe", "AWS"]
        },
        {
            image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
            title: "Dashboard Analítico",
            description: "Panel de control para visualización de datos y métricas en tiempo real.",
            tags: ["Vue.js", "D3.js", "Firebase"]
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
            <section id="projects" className="projects-section">
                <div className="projects-container">
                    <h2 className="section-title">Proyectos Destacados</h2>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="image-container">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">
                                        {project.title}
                                        <ExternalLink className="external-icon"/>
                                    </h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="tags-container">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedContent>
    );
};

export default ProjectsSection;