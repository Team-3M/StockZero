const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const db = require('./index.js');


const productSchema = new mongoose.Schema({
	name: String,
	type: String,
	price: Number,
	createdAt: {
		type: Date, default: new Date
	},
	updatedAt: {
		type: Date, default: new Date
	},
	inventory: Number,
	note: {
		type: String, default: ""
	}
}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
