var Product = require('../database-mongodb/Product')

exports.createOne = function (req, res) {
	const small = new Product(req.body);
	small.save(function (err, data) {
		if (err) {
			return (err);
		} else { res.send(data) }
	}
	);
};

exports.retrieve = function (req, res) {
	Product.find({}).then((data) => {
		res.send(data)

	})
};

exports.retrieveOne = function(req, res){
	Product.find({id: req.params.id})
	.then(({data})=>{
		res.send(data)
	})
	.catch((e)=>{
		console.log(e)
	})

}
exports.updateOne = function (req, res) {
	Product.findOneAndUpdate({ id: req.params.id }, req.body)
		.then(() => {
			return Product.find()
		})
		.then(data => {
			console.log(data)
			res.send(data);
		})
		.catch((e) => {
			console.log(e);
		})
};

exports.deleteOne = function (req, res) {
	Product.deleteOne({ name: req.params.name}, function(error) {
		if (error) {
		 res.status(503).send({ message: "something went wrong!" });
		} else {
		 res.status(200).send({ message: "Product deleted successfuly!" });
		}
	   })};

	   