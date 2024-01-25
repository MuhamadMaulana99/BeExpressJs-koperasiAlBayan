module.exports = (sequelize, DataTypes)=>{
    const masterKasir = sequelize.define('tb_mst_kasir',{
        kodeKasir: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        nama: {
            type: DataTypes.STRING(50),
            default: null,
        },
    })
    return masterKasir;
}