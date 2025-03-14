const express = require('express');
require('dotenv').config();
const cors = require('cors');
require('./db'); 
const carRoutes = require('./routes/carRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api/cars', carRoutes);
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
    console.info(`🚀 Server running on port ${port}`);
});

