module.exports = function(app){
    var signup = require("../controllers/controller.signup");

    app.get("/signup", signup.render);
}