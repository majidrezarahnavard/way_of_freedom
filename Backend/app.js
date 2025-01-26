const express = require('express');
const bodyParser = require('body-parser');
const searchRoutes = require('./routes/searchRoutes');
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/search', searchRoutes);

module.exports = app;
