var express = require("express");
const session = require("express-session");

module.exports = function(){
    var app = express();

    //settings
    app.set("view engine", "ejs");
    app.set("views", "./app/views");

    //routes
    require("../app/routes/routes.index.js")(app);
    require("../app/routes/routes.signup.js")(app);
    require("../app/routes/routes.login.js")(app);

    //manage Sessions
    return app;
};