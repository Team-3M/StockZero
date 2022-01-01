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
exports.updateOne = function (req, res) {
	Product.findOneAndUpdate({ name: req.params.name }, req.body, {
		new: true
	})
		.then(() => {
			return Product.find()
		})
		.then(data => {
			res.send(data);
		})
		.catch((e) => {
			console.log(e);
		})
};

