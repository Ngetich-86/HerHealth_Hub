import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ 
      backgroundImage: 'url(https://i.pinimg.com/474x/2d/98/68/2d986859631715f88972b2b2e0c0169f.jpg)', 
      backgroundPosition: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
      
    }>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-blue-900">
        <h1 className=" text-4xl lg:text-6xl font-bold mb-4">HealthHer</h1>
        <h2 className="text-2xl lg:text-4xl font-bold mb-4">Together, Towards Healthier Lives for Women & girls Everywhere</h2>
        <p className="text-xl mb-8 text-gray-200">Empowering Women & girls through Technology</p>
        <button className=' bg-green-500 text-white w-[150px] mt-6 p-2 rounded-md'>
          <NavLink to="/community"> <h2>Join the Community ! </h2></NavLink>
        </button></div>
    </div>
  );
};

export default Hero;
