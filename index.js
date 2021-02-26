const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// for json stuff
app.use(bodyParser.json());

const userRoutes = require('./Routes/user');
const messagesRoutes = require("./Routes/messages");

app.use('/user', userRoutes);
app.use("/messages", messagesRoutes);

const {PORT} = process.env;




app.listen(PORT, () => console.log(`Server running on port: ${PORT} `));