const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;

// Middleware
app.use(cors({ origin: "http://localhost:3000" })); // Cambia si React está en otro dominio
app.use(bodyParser.json());

// Ruta principal
app.get("/", (req, res) => {
  res.json({ mensaje: "Bienvenido al backend de MGNB Software" });
});

// Ruta para recibir mensajes de contacto
app.post("/contacto", (req, res) => {
  const { nombre, email, mensaje } = req.body;

  // Aquí podrías guardar en una base de datos o enviar por email
  console.log("Mensaje recibido:", { nombre, email, mensaje });

  res.json({
    mensaje: `Gracias ${nombre}, hemos recibido tu mensaje.`,
    datos: { nombre, email, mensaje }
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
