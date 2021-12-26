const express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
const Product = require('../database-mongodb/Product.js');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));
app.use("/", router)

router.get('/api/stock',  function (req, res) {
	// TODO - your code here!
	Product.find((err, Product) => {
		if (err) {
			console.log(err)

		};
		res.json(Product)
	});
});


app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`)
})