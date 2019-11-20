module.exports = function(sequelize, DataTypes) {
    const Medicine = sequelize.define("Medicine", {
        medicinename : {
            type : DataTypes.STRING
        }
    });
    // need to fix models.MedRoutine when ready.
    Medicine.associate = function (models) {
        Medicine.hasMany(models.MedRoutine, {
            onDelete: "cascade"
        });
    };
    return Medicine;
}


//need routine
