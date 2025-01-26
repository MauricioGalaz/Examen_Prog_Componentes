import React, { Component } from "react";
import Producto from "./Producto";

class ListaProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [
        { id: 1, nombre: "Producto 1", precio: 100 },
        { id: 2, nombre: "Producto 2", precio: 200 },
        { id: 3, nombre: "Producto 3", precio: 300 },
      ],
      carrito: [],
    };
  }

  agregarAlCarrito = (producto) => {
    this.setState((prevState) => ({
      carrito: [...prevState.carrito, producto],
    }));
  };

  render() {
    return (
      <div className="container">
        <h2>Lista de Productos</h2>
        <div className="center">
          {this.state.productos.map((producto) => (
            <Producto
              key={producto.id}
              producto={producto}
              agregarAlCarrito={this.agregarAlCarrito}
            />
          ))}
        </div>
        <h2>Carrito</h2>
        <ul>
          {this.state.carrito.map((item, index) => (
            <li key={index}>
              {item.nombre} - ${item.precio}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListaProductos;
