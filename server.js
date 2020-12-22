const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/history', require('./routes/api/history'));

app.get('*', (req, res) => {
  res.send('API running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log( `Server started on port ${PORT}` ));
