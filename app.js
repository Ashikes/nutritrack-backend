const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ashike:CACGLwHUBmkqN8ki@nutritrack.d5jsqbb.mongodb.net/nutritrack', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/diet', require('./routes/diet'));

module.exports = app;
