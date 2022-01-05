const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/product';
mongoose.Promise = global.Promise

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
  console.log("db connected");
});
const db = mongoose.connection;

module.exports = db;
