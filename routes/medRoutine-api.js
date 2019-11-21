var db = require("../models");

module.exports = function (app) {

    app.get("/api/user/:id/medRoutine/", function (req, res) {
        console.log(req.body)
        db.MedRoutine.findAll({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbmedroutine) {
                res.json(dbmedroutine);
            })
    });

    app.get("/api/user/:id/medRoutine/:medRoutine_ID", function (req, res) {
        console.log(req.body)
        //need to check column name for userid under medroutine table
        db.MedRoutine.findAll({
            where: {
                Userid: req.params.id,
                id: req.params.medRoutine_ID
            }
        })
            .then(function (dbmedroutine) {
                res.json(dbmedroutine);
            })
    });

    app.post("/api/user/:userId/medroutine/:med_id", function (req, res) {
        console.log(req);
        db.MedRoutine.create({
            datecount: req.body,
            dosage: req.body,
            dose: req.body,
            MedID: req.body,
            userID: req.body,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        then(results => {
            res.json(results);
        })
    });

    app.put("/api/user/:userId/medroutine/:id", function (req,res) {
        db.MedRoutine.update(req.body, 
            {
                where : {
                    id: req.body.id
                }
            }).then (function (results){
                res.json(results);
            })
    })

}