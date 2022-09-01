const express = require('express');
const morgan = require('morgan');
const app = express();
const { PORT } = require('./config/settings')
const userRoutes = require('./routes/users.routes');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Api running port
app.listen(PORT, () => console.log(`API-AUTH running on port: ${PORT}`));

// Routes server
app.use('/api/v1/users', userRoutes);
