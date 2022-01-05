const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const db = require('./index.js');

var d= new Date;
const productSchema = new mongoose.Schema({
	id:{
		type: Number 
	},
	name: String,
	type: String,
	price: Number,
	createdAt: {
		type: Date, default: d
	},
	updatedAt: {
		type: Date, default: d
	},
	inventory: Number,
	note: {
		type: String, default: ""
	}
}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
