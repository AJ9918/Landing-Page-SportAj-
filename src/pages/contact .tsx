import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
/**
 * PÃ¡gina de contacto con formulario de contacto simulado.
 */
const Contact: React.FC = () => {
  /**
   * Muestra una alerta cuando se hace clic en enviar.
   */
  const handleContact = () => {
    Swal.fire({
      title: 'Mensaje enviado!',
      text: 'Nos pondremos en contacto contigo pronto.',
      icon: 'info',
      confirmButtonText: 'Aceptar',
    });
  };
  return (
    <div className="container">
      <div className="navbar">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <h1>Contact Us</h1>
      <button onClick={handleContact}>Enviar</button>
    </div>
  );
};
export default Contact;