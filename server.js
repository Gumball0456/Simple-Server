const express = require("./config/express");

const app = express();

app.listen(3000);

module.exports = app;
console.log("Listening on port 3000");