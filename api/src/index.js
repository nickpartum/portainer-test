const express = require("express");
const {connectToDB} = require("./db");

const app = express();
const port = 3000

app.get("/", function(req, res) {
    return res.send("Hello World");
});


(async () => {
    try {
        app.listen(port, () => {
            console.log(`API listening on port ${port}`)
        })

        await connectToDB();

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})()
