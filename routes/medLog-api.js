// Dependencies
var db = require("../models");

module.exports = function (app) {

    // GET medLog for specific medRoutine (TAB: MY MEDICATION) & (TAB: DASHBOARD)
    // "/api/user/:userId/medRoutine/:id/medLog"
    app.get("/api/user/:id/medRoutine/:MedRoutineId/medLog", function (req, res) {
        console.log(req.body);
        db.MedLog.findAll({
            where: {
                // UserId: req.params.id,
                id: req.params.MedRoutineId
            },
            include: [db.MedRoutine]
        }).then(function (dbMedLog) {
            res.json(dbMedLog)
        }).catch(function (error) {
            console.log(error);
        });
    });

// get specific medLog for medRoutine
    app.get("/api/user/:id/medRoutine/:MedRoutineId/medLog/:medLogId", function (req, res) {
        db.MedLog.findAll({
            where: {
                id: req.params.id
            },
            include: [db.MedRoutine]
        }).then(function (dbMedLog) {
            res.json(dbMedLog)
        }).catch(function (error) {
            console.log(error);
        });
    });

    // POST medLog
    // "/api/user/:userId/medRoutine/:id/medLog"
    app.post("/api/user/:id/medRoutine/:medRoutineId/medLog/", function (req, res) {
        db.MedLog.create({
            MedRoutineId: req.params.medRoutineId,
            date: req.body.date,
            time: req.body.time,
            status: false
        }).then(function(dbMedLog){
            res.json(dbMedLog);
        }).catch(function (error) {
            console.log(error);
            res.status(500).send({
                error: error
            });
        });
    });

    // UPDATE medLog
    // "/api/user/:userId/medRoutine/:medRoutineId/medLog/:medLogId/"
    app.put("/api/user/:id/medRoutine/:medRoutineId/medLog/:medLogId", function (req, res) {
        db.MedLog.update(
            req.body,
            {
                where: {
                    MedLogId: req.body.id
                }
            }).then(function (dbMedLog) {
                res.json(dbMedLog);
            });
    });

}