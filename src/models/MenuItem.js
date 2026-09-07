const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'La categoría es obligatoria'],
    enum: ['Bebidas Calientes', 'Bebidas Frías', 'Alimentos', 'Postres']
  },
  price: {
    type: Number,
    required: [true, 'El precio es obligatorio']
  },
  available: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('MenuItem', menuItemSchema);