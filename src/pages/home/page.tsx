
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TechnologySection from './components/TechnologySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import { updateSEO, addStructuredData } from '../../utils/seo';

export default function Home() {
  useEffect(() => {
    // Update SEO
    updateSEO({
      title: 'Alliance Media Labs - Where Real Estate Meets Innovation',
      description: 'Creative technology company specializing in real estate content creation and virtual visualization. Cinematic content & virtual experiences for modern developers.',
      keywords: 'real estate visualization, 3D walkthrough, VR tours, drone cinematography, architectural rendering, construction videos',
      canonical: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/`,
      ogImage: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/og-image.jpg`
    });

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Alliance Media Labs",
      "description": "Creative technology company specializing in real estate content creation and virtual visualization",
      "url": import.meta.env.VITE_SITE_URL || 'https://example.com',
      "logo": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9988931093",
        "contactType": "customer service",
        "email": "info@alliancemedialabs.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "D-244, Sector 75",
        "addressLocality": "Chandigarh",
        "addressRegion": "Mohali",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://linkedin.com/company/alliance-media-labs",
        "https://www.instagram.com/alliancemedialabs",
        "https://youtube.com/@alliancemedialabs",
        "https://www.facebook.com/share/1KC5TqxSQL"
      ],
      "services": [
        "3D Walkthrough Videos",
        "Virtual Reality Tours",
        "3D Renders & Isometrics",
        "Interactive 3D Tools",
        "Architectural Scale Models",
        "Construction Update Videos",
        "Location AV",
        "Graphics & Branding",
        "Digital Marketing"
      ]
    };

    addStructuredData(structuredData);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TechnologySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
