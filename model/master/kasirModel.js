module.exports = (sequelize, DataTypes)=>{
    const masterKasir = sequelize.define('tb_mst_kasir',{
        kodeKasir: {
            type: DataTypes.STRING(50),
            default: null,
        },
        namaBarang: {
            type: DataTypes.STRING(50),
            default: null,
        },
    })
    return masterKasir;
}