module.exports = function(sequelize, DataTypes) {
    var MedLog = sequelize.define("MedLog", {
        
        //medRoutine_ID (INT)

        //Date (INT)

        //StartTime (INT)

        //Status (BOOLEAN)
    })


    // MedLog.associate = function (models) {

    //     MedLog.belongsTo(models.MedRoutine, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     })
    // };

    return MedLog;

};