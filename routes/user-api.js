// DEPENDENCIES
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

    // GET specific users 
    // "/api/user/:userId"
    app.get("/api/user/:id", function (req, res) {
        db.User.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser)
        }).catch(function (error) {
            console.log(error);
        });
        // if (!req.user) {
        //     res.json({})
        // } else {
        //     res.json({
        //         email: req.user.email,
        //         userId: req.user.id
        //     });
        // };
    });

    // get all users
    app.get("/api/user", function (req, res) {
        db.User.findAll().then(function (dbUser) {
            res.json(dbUser);
        }).catch(function (error) {
            console.log(error);
        });
    });

    // logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });


    // POST for user logging in
    app.post("/api/user/login",function (req, res) {
        // console.log("login attempted")
        // console.log(req.body)
        // console.log(req.User)
        res.json(req.user);
    })

    // POST create a new user
    // "/api/user"
    app.post("/api/user", function (req, res) {
        //console.log(req.body)
        db.User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then(function (results) {
            console.log(results)
            res.redirect("/");
          // res.json(dbUser);
        }).catch(function (error) {
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
}