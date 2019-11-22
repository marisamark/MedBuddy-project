var db = require("../models");

module.exports = function (app) {
    // GET medicine
    app.get("/api/medicine", function (req, res) {
        db.Medicine.findAll({})
            .then(function (dbmedicine) {
                res.json(dbmedicine);
            })
    });
    // POST medicine
    // need to check req.body
    app.post("/api/medicine", function (req, res) {
        console.log(req.body);
        db.Medicine.create({
            medicinename: req.body,
        })
            .then(function (dbmedicine) {
                res.json(dbmedicine);
            })
    });
}