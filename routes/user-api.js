// DEPENDENCIES
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

// GET specific users 
// "/api/user/:userId"
    app.get("/api/user/:userId", function (req, res) {
        if (!req.user) {
            res.json({})
        } else {
            res.json({
                email: req.user.email,
                userId: req.user.id
            });
        };
    });

// logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });


// POST for user logging in
    app.post("/api/user/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    })

// POST create a new user
// "/api/user"
    app.post("/api/user", function (req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function(dbUser) {
            res.json(dbUser);
        }).catch(function(error){
            res.json(error);
        });
    });

// UPDATE user
// "/api/user/:id
//     app.put("/api/user/:userId", function (req, res) {
//         db.User.update({
//             email: req.body,
//             where: {
//                     userId: req.params.id
//                 }
//         })  
//     })
// }