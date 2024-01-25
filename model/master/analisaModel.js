module.exports = (sequelize, DataTypes)=>{
    const masterAnalisa = sequelize.define('tb_mst_analisa',{
        kodeAnalisa: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        nama: {
            type: DataTypes.STRING(50),
            default: null,
        },
    })
    return masterAnalisa;
}