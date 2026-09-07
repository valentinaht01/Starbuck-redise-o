const MenuItem = require('../models/MenuItem');

// GET - Obtener todos los productos
const getMenu = async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category: new RegExp(category, 'i') } : {};
    
    const items = await MenuItem.find(query);
    res.json({ success: true, count: items.length, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET - Obtener producto por ID
const getMenuItemById = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Producto no encontrado" });
    }
    res.json({ success: true, data: item });
  } catch (error) {
    res.status(400).json({ success: false, message: "ID no válido" });
  }
};

// POST - Crear un nuevo producto
const createMenuItem = async (req, res) => {
  try {
    const newItem = await MenuItem.create(req.body);
    res.status(201).json({ success: true, data: newItem });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  getMenu,
  getMenuItemById,
  createMenuItem
};