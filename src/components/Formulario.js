import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "usuarios"), { nombre, email });
      alert("Datos guardados con éxito");
      setNombre("");
      setEmail("");
    } catch (error) {
      console.error("Error al guardar datos: ", error);
    }
  };

  return (
    <div className="container">
      <h2>Registro</h2>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Formulario;
