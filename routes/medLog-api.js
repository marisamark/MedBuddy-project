// Dependencies
var db = require ("../models");

module.exports = function(app) {

// GET medLog for specific medRoutine (TAB: MY MEDICATION) & (TAB: DASHBOARD)
// "/api/user/:userId/medRoutine/:id/medLog"
    app.get("/api/user/:userId/medRoutine/:medRoutineId/medLog", function (req, res) {
        db.MedLog.findAll({
            where: {
                id: req.params.id
            },
            include: [db.MedRoutine]
        }).then(function(dbMedLog) {
            res.json(dbMedLog)
        }).catch(function(error) {
            console.log(error);
        });
    });

// POST medLog
// "/api/user/:userId/medRoutine/:id/medLog"
    app.post("/api/user/:userId/medRoutine/:medRoutineId/medLog/", function (req, res) {
        db.MedLog.create({
            medRoutineId: req.params.id,
            date: date,
            time: time,
            status: false
        }).catch(function(error) {
            console.log(error);
            res.status(500).send({
                error: error
            });
        });
    });

// UPDATE medLog
// "/api/user/:userId/medRoutine/:medRoutine_id/medLog/:medLog_id/"


}