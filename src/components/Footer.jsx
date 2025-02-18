import {Code2} from 'lucide-react';
import '../styles/Footer.css';
import AnimatedContent from "../blocks/Animations/AnimatedContent/AnimatedContent.jsx";

const Footer = () => {
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
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="brand-container">
                            <Code2 className="brand-icon"/>
                            <span className="brand-text">KeyKode</span>
                        </div>
                        <div className="copyright">
                            © 2024 KeyKode. Todos los derechos reservados.
                        </div>
                    </div>
                </div>
            </footer>
        </AnimatedContent>
    );
};

export default Footer;