const express = require ('express')
var productRouter = require('express').Router();
var productController = require ('./productController')


productRouter
.route('/api/stocks/')
.post(productController.createOne)

module.exports = productRouter