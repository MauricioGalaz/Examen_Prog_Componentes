import React, { useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const SubirArchivo = () => {
  const [archivo, setArchivo] = useState(null);

  const manejarArchivo = async (e) => {
    e.preventDefault();
    const storage = getStorage();
    const archivoRef = ref(storage, `archivos/${archivo.name}`);
    try {
      await uploadBytes(archivoRef, archivo);
      alert("Archivo subido con éxito");
    } catch (error) {
      console.error("Error al subir archivo: ", error);
    }
  };

  return (
    <form onSubmit={manejarArchivo} className="p-4 bg-light rounded shadow mx-auto" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Subir Archivo</h2>
      <input
        className="form-control mb-3"
        type="file"
        onChange={(e) => setArchivo(e.target.files[0])}
        required
      />
      <button className="btn btn-primary w-100" type="submit">Subir</button>
    </form>
  );
};

export default SubirArchivo;
