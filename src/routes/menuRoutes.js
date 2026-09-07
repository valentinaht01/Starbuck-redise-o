const express = require('express');
const router = express.Router();
const { 
  getMenu, 
  getMenuItemById, 
  createMenuItem 
} = require('../controllers/menuController');

// Definir rutas
router.get('/', getMenu);
router.get('/:id', getMenuItemById);
router.post('/', createMenuItem);

module.exports = router;