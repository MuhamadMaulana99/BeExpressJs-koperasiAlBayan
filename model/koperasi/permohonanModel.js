module.exports = (sequelize, DataTypes)=>{
    const masterPermohonan = sequelize.define('tb_Permohonan',{
        kodePermohonan: {
            type: DataTypes.STRING(50),
            default: null,
        },
        namaBarang: {
            type: DataTypes.STRING(50),
            default: null,
        },
    })
    return masterPermohonan;
}