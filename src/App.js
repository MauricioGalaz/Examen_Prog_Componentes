import React from "react";
import ListaProductos from "./components/ListaProductos";
import Formulario from "./components/Formulario";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Bienvenido a la Tienda de Productos
      </h1>
      <ListaProductos />
      <Formulario />
    </div>
  );
};

export default App;
