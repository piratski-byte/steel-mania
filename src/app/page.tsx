import About from '@/components/About';
import ContactUs from '@/components/ContactUs';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <Stats />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
