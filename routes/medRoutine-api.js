var db = require("../models");

module.exports = function (app) {
// get all medRoutine for users
    app.get("/api/user/:id/medRoutine", function (req, res) {
        console.log(req.body)
        db.MedRoutine.findAll({
            where: {
                UserId: req.params.id
            },
            include: [db.MedLog, db.Medicine]
        }).then(function (dbmedroutine) {
            res.json(dbmedroutine);
        }).catch(function (error) {
            console.log(error);
        })
    });

// getting specific routine for users
    app.get("/api/user/:id/medRoutine/:MedRoutineId", function (req, res) {
        console.log(req.body)
        //need to check column name for userid under medroutine table
        db.MedRoutine.findAll({
            where: {
                UserId: req.params.id,
                id: req.params.MedRoutineId
            },
            include: [db.MedLog]
        })
        .then(function (dbmedroutine) {
            res.json(dbmedroutine);
        }).catch(function (error) {
            console.log(error);
        })
    });

// posting medroutine for user
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
        }).catch(function (error) {
            console.log(error);
        });
    });

    app.put("/api/user/:id/medRoutine/:MedRoutineId", function (req, res) {
        db.MedRoutine.update(req.body,
            {
                where: {
                    UserId: req.params.id,
                    id: req.params.MedRoutineId
                }
            }).then(function (results) {
                res.json(results);
            }).catch(function (error) {
                console.log(error);
            })
    })

}