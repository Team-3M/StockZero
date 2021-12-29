var Product = require('../database-mongodb/Product')

exports.createOne = function (req, res) {
	const small = new Product(req.body);
	small.save(function (err, data) {
		if (err) {
			return handleError(err);
		} else { res.send(data) }
	}
	);
};

