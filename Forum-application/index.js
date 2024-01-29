const express = require('express')
const app = express();

// Express configuration
require("./config/express-middleware").config(app);
// DB configuration
require('./config/db-connect').config();



app.listen(3000, () => {
    console.log("Server has started");
})