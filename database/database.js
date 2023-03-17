const mongoose = require('mongoose');
const seederData = require('../data/seeder');
const Acronym = require('../models/acronymModel');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost/fulhausDB', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
    const isEmpty = (await Acronym.exists()) ? false : true;
    if (isEmpty) {
      const createdAcronyms = await Acronym.insertMany(seederData);
      console.log(`Seeder data: ${createdAcronyms} was initialized`);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
