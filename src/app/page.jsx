"use client";

// import Catalogue from '@/Components/Catalogue/Catalogue';
import HeroSection from '@/Components/HeroSection/HeroSection';
import Navbar from '@/Components/Navbar/Navbar';
import ProductsCatalogue from '@/Components/ProductsCatalogue/ProductsCatalogue';
import Gallery from '@/Components/Gallery/Gallery';
import Footer from '@/Components/Footer/Footer';

/**
 * Home Page Component
 * Main landing page with hero section, catalogue, and products
 * @returns {JSX.Element} Home page component
 */
export default function Home() {
  return (
    <main className="w-full h-full relative">
      {/* <Navbar /> */}
      <HeroSection />
      {/* <Catalogue /> */}
      <ProductsCatalogue />
      <Gallery />
      <Footer />
    </main>
  );
}