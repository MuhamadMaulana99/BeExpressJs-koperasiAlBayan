module.exports = (sequelize, DataTypes)=>{
    const permohonan = sequelize.define('tb_Permohonan',{
        rekening: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        namaNasabah: {
            type: DataTypes.STRING(50),
            default: null,
        },
        jenisKelamin: {
            type: DataTypes.STRING(50),
            default: null,
        },
        alamat: {
            type: DataTypes.STRING(50),
            default: null,
        },
        kecamatan: {
            type: DataTypes.STRING(50),
            default: null,
        },
        kabupaten: {
            type: DataTypes.STRING(50),
            default: null,
        },
        provinsi: {
            type: DataTypes.STRING(50),
            default: null,
        },
        saldoTabungan: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
    })
    return permohonan;
}