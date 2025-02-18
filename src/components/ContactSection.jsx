import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import '../styles/ContactSection.css';
import {useState} from "react";
import AnimatedContent from "../blocks/Animations/AnimatedContent/AnimatedContent.jsx";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envío del formulario
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
            <section id="contact" className="contact-section">
                <div className="contact-container">
                    <div className="contact-header">
                        <h2 className="section-title">Contáctanos</h2>
                        <p className="section-subtitle">Estamos aquí para ayudarte a hacer realidad tu próximo
                            proyecto</p>
                    </div>

                    <div className="contact-info-grid">
                        <div className="contact-card">
                            <Mail className="contact-icon"/>
                            <h3>Email</h3>
                            <p>baldiokevin8@gmail.com</p>
                        </div>
                        <div className="contact-card">
                            <Phone className="contact-icon"/>
                            <h3>Teléfono</h3>
                            <p>+57 3005199728</p>
                        </div>
                        <div className="contact-card">
                            <MapPin className="contact-icon"/>
                            <h3>Ubicación</h3>
                            <p>Bucaramanga, Colombia</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Asunto</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">
                            Enviar Mensaje
                            <ChevronRight className="button-icon"/>
                        </button>
                    </form>
                </div>
            </section>
        </AnimatedContent>

    );
};

export default ContactSection;