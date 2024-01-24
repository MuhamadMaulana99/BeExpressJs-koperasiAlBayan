module.exports = (sequelize, DataTypes)=>{
    const masterStaff = sequelize.define('tb_mst_staff',{
        kodeStaff: {
            type: DataTypes.STRING(50),
            default: null,
        },
        namaBarang: {
            type: DataTypes.STRING(50),
            default: null,
        },
    })
    return masterStaff;
}