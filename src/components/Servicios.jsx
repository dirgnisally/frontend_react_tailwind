// src/components/Servicios.jsx
import React, { useEffect, useState } from 'react';

const Servicios = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    // Aquí debes colocar la URL de tu API de WordPress
    //fetch('http://tu-sitio.com/wp-json/wp/v2/posts?categories=servicios')
    fetch('http://landing-wp.local/wp-json/wp/v2/posts?categoria=servicios')
      .then((response) => response.json())
      .then((data) => setServicios(data))
      .catch((error) => console.error('Error al obtener los servicios:', error));
  }, []);

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{servicio.title.rendered}</h3>
            <div dangerouslySetInnerHTML={{ __html: servicio.excerpt.rendered }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
