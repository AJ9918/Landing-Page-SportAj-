import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Image from 'next/image'; // Importa el componente Image de Next.js
import miImagen from '../assets/img/GUAYO2.jpg'; // Importar la imagen
import producto2 from '../assets/img/nikezoom.png'; // Importar otra imagen
import producto3 from '../assets/img/balon.jpg'; // Importar otra imagen
import producto4 from '../assets/img/casco.png';
import producto5 from '../assets/img/guantes.jpg';
import producto6 from '../assets/img/BICI.jpeg';
import producto7 from '../assets/img/BEISBOL.jpg';
import producto8 from '../assets/img/PATINES.jpg';


/**
 * Componente que muestra la tarjeta de un producto
 */
const ProductoCard: React.FC<{ imagen: StaticImageData; nombre: string; precio: string }> = ({ imagen, nombre, precio }) => {
  // Función que muestra una alerta con información del producto
  const handleClick = () => {
    Swal.fire({
      title: nombre, 
      text: `Precio: ${precio}`,
      imageUrl: imagen.src, // Usamos imagen.src para obtener la URL de la imagen
      imageWidth: 300,
      imageHeight: 330,
      imageAlt: nombre,
      confirmButtonText:'!Comprar Ahora!',
    });
  };

  return (
    <div className="card" onClick={handleClick}>
      {/* Imagen más pequeña y con 'objectFit' para ajustarse bien */}
      <Image 
        src={imagen} 
        alt={nombre} 
        width={250} // Tamaño reducido para la imagen
        height={200} // Tamaño reducido para la imagen
        style={{ objectFit: 'cover' }} // Ajusta la imagen para que ocupe el espacio sin deformarse
      />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{precio}</p>
      </div>
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

      {/* Contenedor para mostrar las tarjetas de los productos */}
      <div className="product-container">
        <ProductoCard 
          imagen={miImagen} 
          nombre="Promo Guayos Adidas Predator" 
          precio="$159.000" 
        />
        <ProductoCard 
          imagen={producto2} 
          nombre="Zapatillas Nike Zoom Running" 
          precio="$1.029.000" 
        />
        <ProductoCard 
          imagen={producto3} 
          nombre="Balón de Fútbol Adidas" 
          precio="$49.000" 
        />
        <ProductoCard 
          imagen={producto4} 
          nombre=" ! PROMO !Casco de Bicicleta" 
          precio="$390.000" 
        />
        <ProductoCard 
          imagen={producto5} 
          nombre="Guantes de Fútbol" 
          precio="$208.000" 
        />
        <ProductoCard 
          imagen={producto6} 
          nombre="Bicicleta de Ruta" 
          precio="$20.000.000" 
        />
        <ProductoCard 
          imagen={producto7} 
          nombre="Combo Beisball" 
          precio="$269.200" 
        />
      </div>
      <ProductoCard 
          imagen={producto8} 
          nombre="Patines Profesionales" 
          precio="$790.000" 
        />
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
