import React from 'react';
import Link from 'next/link';

/**
 * Página About que muestra información de la aplicación.
 */
const About: React.FC = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <h1>About SportAj 🏈⚽🏀</h1>
      <p>Esta Landing Page ,está dedicada a los amantes de los deportes, enconrtraras diverso catalog de articulos,
        promociones,asesorias y demas, Animate 
      </p>
    </div>
  );
};

export default About;