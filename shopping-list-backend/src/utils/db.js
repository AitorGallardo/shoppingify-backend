const mongoose = require('mongoose');
require('dotenv').config();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error.message);
    process.exit(1);
  }
};

module.exports = connectToDB;