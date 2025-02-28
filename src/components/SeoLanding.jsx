import { Helmet } from "react-helmet-async";

export const SeoLanding = () => {
    return (
        <Helmet>
            <title>Keykode | Consultoría y Desarrollo de Software para Empresas</title>
            <meta
                name="description"
                content="Keykode: Consultoría tecnológica y desarrollo de software personalizado. Transformamos tu negocio con soluciones escalables y modernas."
            />
            <meta
                name="keywords"
                content="consultoría software, desarrollo aplicaciones, tecnología empresarial, soluciones IT, desarrollo web, software a medida, transformación digital"
            />

            {/* Open Graph/Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://keykode.tech/" />
            <meta property="og:title" content="Keykode - Expertos en Software Empresarial" />
            <meta
                property="og:description"
                content="Consultoría tecnológica y desarrollo de software personalizado para empresas. Soluciones escalables y modernas para tu negocio."
            />
            <meta property="og:image" content="https://keykode.tech/og-image-keykode.jpg" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://keykode.tech/" />
            <meta property="twitter:title" content="Keykode - Expertos en Software Empresarial" />
            <meta
                property="twitter:description"
                content="Consultoría tecnológica y desarrollo de software personalizado para empresas. Soluciones escalables y modernas para tu negocio."
            />
            <meta property="twitter:image" content="https://keykode.com/og-image-keykode.jpg" />

            <link rel="canonical" href="https://keykode.tech/" />
        </Helmet>
    );
};