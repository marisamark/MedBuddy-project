module.exports = function(sequelize, DataTypes) {
    const MedRoutine = sequelize.define("MedRoutine", {
        datecount : {
            type : DataTypes.INTEGER
        },
        dosage : {
            type : DataTypes.STRING
        },
        dose : {
            type : DataTypes.STRING
        }
    });
    // need to fix models.MedRoutine when ready.
    Medicine.associate = function (models) {
        MedRoutine.belongsTo(models.Medicine, {
            foreignKey : {
                alloNull : false
            }
        });

        MedRoutine.belongsTo(models.User, {
            foreignKey : {
                allowNull : false
            }
        });
        //fix name once medlog is ready
        MedRoutine.hasMany(models.Medlog, {
            foreignKey : {
                allowNull : false
            }
        });
    };
    return MedRoutine;
}