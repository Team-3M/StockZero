const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/blogmodo';
mongoose.Promise = global.Promise

mongoose.connect(mongoUri,{ useNewUrlParser: true, useUnifiedTopology: true },() => {
  console.log("db connected");
});
const db = mongoose.connection;

module.exports = db;
