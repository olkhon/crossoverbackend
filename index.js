const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// for json stuff
app.use(bodyParser.json());

const userRoutes = require('./Routes/user');

app.use('/user', userRoutes);

const port = 3000;




app.listen(port, () => console.log(`Server running on port: ${port} `));