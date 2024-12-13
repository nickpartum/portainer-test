require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {Sequelize} = require("sequelize");

const PORT = process.env.PORT || 3000;
const app = express();

const sequelize = new Sequelize(process.env.DATABASE_URL) // Example for postgres



app.use(bodyParser.json());
app.use(cors());

app.use('/', (req, res, next) => {
    res.json("dsfsdfsd")
});

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
