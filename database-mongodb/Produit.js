const { Schema, model} = require ('mongoose');
const mongoose = require('mongoose');
const db = require('./index.js');


const produitSchema = new mongoose.Schema({
  title: String,
  author: String,
  imageUrl: String,
  body: String,
  createdAt: String,
  views: {type: Number, default: 0}
},
  {
    timestamps: true
  }
);

const Produit = mongoose.model('Produit', produitSchema);

module.exports = Produit;
