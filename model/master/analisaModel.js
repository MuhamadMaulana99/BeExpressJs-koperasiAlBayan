module.exports = (sequelize, DataTypes)=>{
    const masterAnalisa = sequelize.define('tb_mst_analisa',{
        kodeAnalisa: {
            type: DataTypes.STRING(50),
            default: null,
        },
        namaBarang: {
            type: DataTypes.STRING(50),
            default: null,
        },
    })
    return masterAnalisa;
}