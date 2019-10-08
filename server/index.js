const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const Rental = require('./models/rental');

const rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
});

const app = express();
app.use('/api/v1/rentals', rentalRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('I am running');
});

// mongodb+srv://yes:yesyes@cluster0-gqflw.mongodb.net/admin?retryWrites=true&w=majority
