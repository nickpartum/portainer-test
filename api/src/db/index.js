const  { PrismaClient } = require('./build');


const db = new PrismaClient()

async function connectToDB() {
    try {
        await db.$connect();
        console.log("[database]: connected!");
    } catch (err) {
        console.log("[database]: connection error: ", err);
        await db.$disconnect();
    }
}

module.exports = {db, connectToDB};
