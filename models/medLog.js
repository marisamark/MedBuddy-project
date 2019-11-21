module.exports = function(sequelize, DataTypes) {
    var MedLog = sequelize.define("MedLog", {

        //Date (INT)
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        //time (INT)
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        //status (BOOLEAN)
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    MedLog.associate = function (models) {

        MedLog.belongsTo(models.MedRoutine, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return MedLog;

};