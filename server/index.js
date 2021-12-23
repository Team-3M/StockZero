const express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
const Produit = require('../database-mongodb/Produit.js');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));
app.use("/", router)

router.get('/api/stock',  function (req, res) {
	// TODO - your code here!
	Produit.find((err, Produit) => {
		if (err) {
			console.log(err)

		};
		res.json(Produit)
	});
});

//patch is not returning anything with postman
router.patch('/api/stocks/:stockId', function(req, res, _id){
	Produit.findById(_id, function(err, docs){
if (err){
	console.log(err)
}
res.send(docs)
	})

})

router.post('/api/stoks/', function(req, res){
const small = new Produit(req.body);
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