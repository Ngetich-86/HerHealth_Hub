
import React, { useEffect } from 'react';
import Footer from '../components/homePage/Footer';
import Navbar from '../components/homePage/Navbar';
import Team from '../components/Team';


const AboutUs: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('translate-x-0', 'opacity-100');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach((card) => {
      observer.observe(card);
      card.classList.add('-translate-x-full', 'opacity-0', 'transition', 'duration-1000');
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-4xl text-cards">Our Goals</h1>
        </div>
        <div className="p-8 text-center md:text-left md:w-3/4 md:ml-[200px] mx-auto">
          Our vision is to bridge the gap between theory and practical
          knowledge of technology, to help students learn about Google
          technologies, and to build solutions for local businesses and their
          community.
        </div>

      
        <Team />
      </div>
      {/* <Footer /> */}
      <Footer />
    </>
  );
};

export default AboutUs;
