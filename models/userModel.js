// test from tutorial

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  //defines the parameters in user document
  // takes key value pairs, value is the variable type
  name: String,
  age: Number,
});

module.exports = mongoose.model('User', userSchema); // name of the collection, the schema is follows in the db
