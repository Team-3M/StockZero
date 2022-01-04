const express = require ('express')
var productRouter = require('express').Router();
var productController = require ('./productController')


productRouter
.route('/api/add')
.post(productController.createOne)

productRouter
.route('/api/stock')
.get(productController.retrieve)

productRouter
.route('/api/update/:id')
.put(productController.updateOne)

productRouter
.route('/api/delete/:id')
.delete(productController.deleteOne)

module.exports = productRouter