const express = require("express");
const {Sequelize} = require("sequelize");

const app = express();
const port = 3000

const sequelize = new Sequelize(process.env.DATABASE_URL) // Example for postgres

app.get("/", function(req, res) {
    return res.send("Hello World");
});


(async () => {
    try {
        app.listen(port, () => {
            console.log(`API listening on port ${port}`)
        })

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

    } catch (error) {
        console.error('Unable to connect to the database:', error);

        process.exit(1);
    }
})()
