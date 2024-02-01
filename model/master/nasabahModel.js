module.exports = (sequelize, DataTypes)=>{
    const masterNasabah = sequelize.define('tb_mst_nasabah',{
        // nasabahId: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        // },
        nama: {
            type: DataTypes.STRING(50),
            default: null,
        },
        mstRekening: {
            type: DataTypes.STRING(50),
            default: null,
        },
        mstNik: {
            type: DataTypes.STRING(50),
            default: null,
        },
        mstjenisKelamin: {
            type: DataTypes.STRING(50),
            default: null,
        },
        mstAlamat: {
            type: DataTypes.STRING(50),
            default: null,
        },
        mstKecamatan: {
            type: DataTypes.STRING(50),
            default: null,
        },
        mstKabupaten: {
            type: DataTypes.STRING(50),
            default: null,
        },
        mstProvinsi: {
            type: DataTypes.STRING(50),
            default: null,
        },
    })
    return masterNasabah;
}