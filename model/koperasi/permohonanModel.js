module.exports = (sequelize, DataTypes)=>{
    const permohonan = sequelize.define('tb_Permohonan',{
        // permohonanId: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        // },
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
        statusPermohonan: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        hasilPermohonan: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        persentase: {
            type: DataTypes.INTEGER(11),
            defaultValue: false,
        },
        saldoTabungan: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
    })
    return permohonan;
}