import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Image from 'next/image'; // Importa el componente Image de Next.js
import miImagen from '../assets/img/Guayopromo.png'; // Importar la imagen

/**
 * Componente que muestra la imagen
 */
const MiComponente: React.FC = () => {
  return (
    <div>
      <h3>Promo Guayos Adidas Predator $ 159.000</h3>
      <Image 
        src={miImagen} 
        alt="Guayo adidas Predator" 
        width={400} // Establece el ancho deseado
        height={520} // Establece la altura deseada
      />
    </div>
  );
};

/**
 * Componente de página principal.
 */
const Home: React.FC = () => {
  /**
   * Muestra una alerta de bienvenida usando SweetAlert2.
   */
  const showAlert = () => {
    Swal.fire({
      title: 'Bienvenido a Sportaj!',
      text: 'Disfruta de los mejores artículos deportivos',
      icon: 'success',
      confirmButtonText: '¡Vamos!',
    });
  };

  return (
    <div className="container">
      <div className="navbar">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>

      <h1>Zona Deportiva SportAj</h1>
      <p>Bienvenido a tu zona deportiva</p>

      {/* Mostrar la alerta cuando se hace clic en el botón */}
      <button onClick={showAlert}>Click Me</button>

      {/* Mostrar la imagen */}
      <MiComponente />

      {/* Footer */}
      <footer className="footer">
        <p>
          © Copyright: 2024 Sportaj - <a href="#">Contáctenos</a> |{' '}
          <a href="#">Política de privacidad | Derechos de autor</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
