module.exports = function (sequelize, DataTypes) {
    const MedRoutine = sequelize.define("MedRoutine", {
        datecount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dosage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dose: {
            type: DataTypes.STRING,
            allowNull: false
        },
        medicinename: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    // need to fix models.MedRoutine when ready.
    MedRoutine.associate = function (models) {
        
        MedRoutine.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        //fix name once medlog is ready
        MedRoutine.hasMany(models.MedLog, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return MedRoutine;
}