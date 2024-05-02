module.exports = function(app){
    var login = require("../controllers/controller.login");

    app.get("/login", login.render);
}