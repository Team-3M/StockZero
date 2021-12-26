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

//patch is not returning anything with postman
router.patch('/api/stocks/:stockId', function(req, res, _id){
	Product.findById(_id, function(err, docs){
if (err){
	console.log(err)
}
res.send(docs)
	})

})

router.post('/api/stoks/', function(req, res){
const small = new Product(req.body);
small.save(function(err, data){
	if (err){
		console.log(err)
	} else
	res.send(data)
})
})




app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`)
})