module.exports = (sequelize, DataTypes)=>{
    const masterStaff = sequelize.define('tb_mst_staff',{
        kodeStaff: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        nama: {
            type: DataTypes.STRING(50),
            default: null,
        },
    })
    return masterStaff;
}