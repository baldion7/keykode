import React from 'react';
import {ChevronRight} from 'lucide-react';
import '../styles/Hero.css';
import SplitText from "../TextAnimations/SplitText/SplitText.jsx";
import RotatingText from "../TextAnimations/RotatingText/RotatingText.jsx";
import DecryptedText from "../TextAnimations/DecryptedText/DecryptedText.jsx";
import AnimatedContent from "../blocks/Animations/AnimatedContent/AnimatedContent.jsx";
import BlurText from "../TextAnimations/BlurText/BlurText.jsx";


const Hero = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
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
        <section className="hero">
            <div className="hero-pattern"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    <SplitText
                        text=" Transformando líneas de código en"
                        className=""
                        delay={60}
                        animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
                        animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />

                    <span className={"highlight"}>
                        <RotatingText
                            texts={['innovaciones tecnológicas', 'plataformas digitales', 'herramientas digitales', 'sistemas inteligentes']}
                            mainClassName="px-2 sm:px-2  md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                            staggerFrom={"last"}
                            initial={{y: "100%"}}
                            animate={{y: 0}}
                            exit={{y: "-120%"}}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{type: "spring", damping: 30, stiffness: 400}}
                            rotationInterval={2000}
                        />
                   </span>

                </h1>
                <p className="hero-subtitle decrypted">
                    <DecryptedText
                        text="Creamos software innovador que impulsa el futuro digital de tu empresa"
                        className="revealed"
                        speed={30}
                        sequential={true}
                        animateOn="view"
                        parentClassName="all-letters"
                        encryptedClassName="encrypted"
                    />

                </p>
                <p className="hero-subtitle bluer">
                    <BlurText
                        text="Creamos software innovador que impulsa el futuro digital de tu empresa"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-2xl mb-8"
                    />

                </p>
                <div className="cta-container">
                    <button className="cta-button">
                        <span>Desarrollamos tu futuro</span>
                        <ChevronRight className="cta-icon"/>
                    </button>
                </div>
            </div>
        </section>
        </AnimatedContent>
    );
};

export default Hero;