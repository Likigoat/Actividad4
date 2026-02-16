const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Relación con el creador
});

module.exports = mongoose.model('Product', ProductSchema);