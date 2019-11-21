// DEPENDENCIES
var db = require("../models");

module.exports = function(app) {

// GET specific users 
// "/api/user/:userId"
    app.get("/api/user/:userId", function (req,res) {
        db.User.findOne({
            where: {
                userId: req.params.id
            },
        })
    })


// POST user
// "/api/user"


// UPDATE user
// "/api/user/:id

}