module.exports = function(app){
    var index = require("../controllers/controller.index");

    app.get("/", index.render);
}