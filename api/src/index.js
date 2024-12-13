require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();

const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;


app.use(bodyParser.json());
app.use(cors());

app.use('/status', (req, res, next) => {
    res.json("ok")
});
app.get('/users', async (req, res) => {

    res.json({ message: "success", data: [] });
});

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
});
