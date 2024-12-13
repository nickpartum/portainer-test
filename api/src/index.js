require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const prisma = require("./prisma");

const PORT = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.json());
app.use(cors());

app.use('/status', (req, res, next) => {
    res.json("ok")
});
app.get('/users', async (req, res) => {
    const user = await prisma.user.findMany();

    res.json({ message: "success", data: user });
});

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});
