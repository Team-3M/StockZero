const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const db = require('./index.js');


const productSchema = new mongoose.Schema({
	name: String,
	type: String,
	price : Number,
	createdAt: {type:Date, default: Date.now},
	updatedAt: Date,
	stock: Number,
	note: String
}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
