import React from 'react';
import Nav from '../components/landing/Nav';
import Hero from '../components/landing/Hero';
import TrustStrip from '../components/landing/TrustStrip';
import Features from '../components/landing/Features';
import Showcase from '../components/landing/Showcase';
import HowItWorks from '../components/landing/HowItWorks';
import Benefits from '../components/landing/Benefits';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';

const Landing = () => {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <TrustStrip />
      <Features />
      <Showcase />
      <HowItWorks />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default Landing;
