import { useState } from "react"
import "../styles/AboutUs.css"
import AnimatedContent from "../blocks/Animations/AnimatedContent/AnimatedContent.jsx";

const workflowSteps = [
    { label: "Planificación", description: "Definimos objetivos y estrategias" },
    { label: "Diseño", description: "Creamos prototipos y maquetas" },
    { label: "Desarrollo", description: "Codificamos la solución" },
    { label: "Pruebas", description: "Aseguramos la calidad" },
    { label: "Despliegue", description: "Lanzamos el producto" },
]

const AboutUs = () => {
    const [activeStep, setActiveStep] = useState(0)

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
        <section id="nosotros" className="about-section">
            <div className="about-container">
                <div className="workflow-container">
                    <h3 className="workflow-title">Nuestra Metodología de Trabajo</h3>
                    <div className="workflow-steps">
                        {workflowSteps.map((step, index) => (
                            <div
                                key={step.label}
                                className={`workflow-step ${activeStep === index ? 'active' : ''}`}
                                onClick={() => setActiveStep(index)}
                            >
                                <h4 className="step-title">{step.label}</h4>
                                <p className="step-description">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </AnimatedContent>
    )
}

export default AboutUs