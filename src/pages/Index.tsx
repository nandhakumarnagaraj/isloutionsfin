import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ValuesSection from '@/components/ValuesSection';
import BusinessGrowthSection from '@/components/BusinessGrowthSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>iSolutions - A Complete Financial Solution | Chennai</title>
        <meta name="description" content="iSolutions offers comprehensive financial services including home funding, personal funding, vehicle funding, business funding, insurance, and investments in Chennai. Your trusted financial partner since 2010." />
        <meta name="keywords" content="financial services Chennai, home funding Chennai, personal funding, vehicle funding, business funding, insurance, investments, iSolutions" />
        <link rel="image_src" href="./logo.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.isolutionsfin.com" />
        <meta property="og:title" content="iSolutions - A Complete Financial Solution | Chennai" />
        <meta property="og:description" content="iSolutions offers comprehensive financial services including home funding, personal funding, vehicle funding, business funding, insurance, and investments in Chennai. Your trusted financial partner since 2010." />
        <meta property="og:image" content="./logo.png" />
        <meta property="og:image:alt" content="iSolutions Logo" />
        <meta property="og:site_name" content="iSolutions" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.isolutionsfin.com" />
        <meta name="twitter:title" content="iSolutions - A Complete Financial Solution | Chennai" />
        <meta name="twitter:description" content="iSolutions offers comprehensive financial services including home funding, personal funding, vehicle funding, business funding, insurance, and investments in Chennai. Your trusted financial partner since 2010." />
        <meta name="twitter:image" content="./logo.png" />
        <meta name="twitter:image:alt" content="iSolutions Logo" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ValuesSection />
          <BusinessGrowthSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
