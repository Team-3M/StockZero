const express = require('express');
var router = express.Router();
const routes = require("./productRouter")
var bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));
app.use("/", router)

app.use("/",routes);

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`)
})