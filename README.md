# ☕ Starbucks Web Application

Aplicación web modular inspirada en Starbucks, desarrollada con un frontend interactivo y una API RESTful con arquitectura **MVC** (Modelo-Vista-Controlador) usando **Node.js**, **Express** y **MongoDB Atlas**.

---

## 🚀 Características

- **Arquitectura Modular (MVC)**: Separación clara entre modelos, controladores, rutas y configuraciones.
- **API RESTful**: Endpoints para consultar el menú completo, filtrar por categorías, buscar ítems por ID y registrar nuevos productos.
- **Base de Datos en la Nube**: Persistencia de datos integrada con **MongoDB Atlas** utilizando **Mongoose**.
- **Frontend Dinámico**: Consumo de la API mediante `fetch` e inyección dinámica de tarjetas de productos en el DOM.
- **Seguridad y Variables de Entorno**: Configuración con `dotenv` y manejo de variables sensibles en `.env` (excluidas del control de versiones).

---

## 🛠️ Tecnologías Utilizadas

- **Backend**: Node.js, Express.js
- **Base de Datos**: MongoDB Atlas, Mongoose
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Herramientas de Desarrollo**: Nodemon, Cors, Dotenv, Git/GitHub

---

## 📁 Estructura del Proyecto

```text
starbucks-backend/
├── src/
│   ├── config/
│   │   └── db.js            # Conexión a MongoDB Atlas
│   ├── controllers/
│   │   └── menuController.js# Lógica de negocio (CRUD)
│   ├── models/
│   │   └── MenuItem.js      # Esquema de Mongoose para los productos
│   ├── routes/
│   │   └── menuRoutes.js    # Definición de endpoints
│   └── app.js               # Configuración de Express y middlewares
├── .env.example             # Plantilla de variables de entorno
├── .gitignore                # Archivos ignorados por Git
├── index.js                 # Punto de entrada de la aplicación
└── package.json             # Dependencias del proyecto
