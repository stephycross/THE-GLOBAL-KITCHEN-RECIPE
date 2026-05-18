const express = require('express');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');
const { errorHandler, notFound } = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount Routes
app.use('/recipes', recipeRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;
