const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/MuseumUserTracker', { useNewUrlParser: true });
const connection = mongoose.connection;

const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

app.use('/', router);

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});