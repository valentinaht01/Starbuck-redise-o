const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const menuRoutes = require('./routes/menuRoutes');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Rutas de la API
app.use('/api/menu', menuRoutes);

app.get('/', (req, res) => {
  res.json({ message: "API Starbucks Backend Funcionando" });
});

module.exports = app;
