module.exports = function(sequelize, DataTypes) {
    var MedLog = sequelize.define("MedLog", {
        
        //Date (INT)
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            
        }


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