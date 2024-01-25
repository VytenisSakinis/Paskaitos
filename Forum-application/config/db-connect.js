const mongoose = require('mongoose');
require("dotenv").config();

function config() {


mongoose.connect(process.env.MONGO_CONNECTION
    .replace("__DB_USER", process.env.DB_USER)
    .replace("__DB_PASSWORD", process.env.DB_PASSWORD)
    .replace("__DB_HOST", process.env.DB_HOST)
    .replace("__DB_NAME", process.env.DB_NAME))
const db = mongoose.connection;

// DB listeners, providing information wether we've connected or not
db.on('error', (error) => {
    console.error('Could not connect to database:' + error);
})

db.once('open', () => {
    console.info('Connected to database')
}
)
}

module.exports = { config };