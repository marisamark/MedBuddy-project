var db = require("../models");

module.exports = function (app) {

    app.get("/api/user/:id/medRoutine", function (req, res) {
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

    app.get("/api/user/:id/medRoutine/:MedRoutineId", function (req, res) {
        console.log(req.body)
        //need to check column name for userid under medroutine table
        db.MedRoutine.findAll({
            where: {
                id: req.params.id,
                MedRoutineId: req.params.MedRoutineId
            }
        })
            .then(function (dbmedroutine) {
                res.json(dbmedroutine);
            })
    });

    app.post("/api/user/:id/medRoutine", function (req, res) {
        console.log(req.body);
        db.MedRoutine.create({
            datecount: req.body.datecount,
            dosage: req.body.dosage,
            dose: req.body.dose,
            MedicineId: req.body.medicineId,
            UserId: req.params.id,
        })
        .then(function(dbMedRoutine) {
            res.json(dbMedRoutine)
        });
    });

    app.put("/api/user/:id/medRoutine/:MedRoutineId", function (req, res) {
        db.MedRoutine.update(req.body,
            {
                where: {
                    MedRoutineId: req.params.id
                }
            }).then(function (results) {
                res.json(results);
            })
    })

}