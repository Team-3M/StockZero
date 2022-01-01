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

router.put('/api/stocks/:stockId', function (req, res) {
	try {
		const id = req.params.id;
		const modification = req.body; // the modification requested from the user
		const updated_Product = { new: true }; //to pass the updated Product directly
		const result = Product.findByIdAndUpdate(id, modification, updated_Product);
		res.send(result)
	}
	catch (err) {
		console.error(err)
	}
});


app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`)
})