require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1', router);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});
