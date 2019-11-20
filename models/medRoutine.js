module.exports = function(sequelize, DataTypes) {
    const MedRoutine = sequelize.define("MedRoutine", {
        datecount : {
            type : DataTypes.INTEGER,
            validate : {
                allowNull : false
            }
        },
        dosage : {
            type : DataTypes.STRING,
            validate : {
                allowNull : false
            }
        },
        dose : {
            type : DataTypes.STRING,
            validate : {
                allowNull : false
            }
        }
    });
    // need to fix models.MedRoutine when ready.
    MedRoutine.associate = function (models) {
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
        MedRoutine.hasMany(models.MedLog, {
            foreignKey : {
                allowNull : false
            }
        });
    };
    return MedRoutine;
}