require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {init} = require("../config/sequelize");

const PORT = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.json());
app.use(cors());

app.use('/', (req, res, next) => {
    res.json("dsfsdfsd")
});

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await init()
});
