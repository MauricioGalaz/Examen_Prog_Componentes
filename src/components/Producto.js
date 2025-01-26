import React from 'react';

const Producto = ({ producto, agregarAlCarrito }) => {
  return (
    <div>
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      {/* Al hacer clic, se llama a agregarAlCarrito pasando el producto */}
      <button onClick={() => agregarAlCarrito(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Producto;
