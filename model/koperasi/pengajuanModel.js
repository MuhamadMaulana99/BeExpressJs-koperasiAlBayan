module.exports = (sequelize, DataTypes)=>{
    const pengajuan = sequelize.define('tb_pengajuan',{
        // nasabahId: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        // },
        rekening: {
            type: DataTypes.STRING(50),
            default: null,
        },
        namaNasabah: {
            type: DataTypes.STRING(50),
            default: null,
        },
        penjualan: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        hargaPokok: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        biaya: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        labaUsaha: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        pendapatanLain: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        jumlahPendapatan: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        kebutuhanRumahTangga: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        biayaPendidikan: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        biayaLainya: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        jumlahBiayaLuarUsaha: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        pendapatanBersih: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        rasioAngsuran: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        jangkaWaktu: {
            type: DataTypes.STRING(50),
            default: null,
        },
        nominalPermohonan: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        tujuanPembiayaan: {
            type: DataTypes.STRING(50),
            default: null,
        },
        jaminan: {
            type: DataTypes.STRING(50),
            default: null,
        },
        accPermohonan: {
            type: DataTypes.STRING(50),
            default: null,
        },
        nomorAkad: {
            type: DataTypes.STRING(50),
            default: null,
        },
        status: {
            type: DataTypes.STRING(50),
            default: null,
        },
        statusBy: {
            type: DataTypes.STRING(50),
            default: null,
        },
        statusAt: {
            type: DataTypes.STRING(50),
            default: null,
        },
        foto: {
            type: DataTypes.STRING,
            default: null,
        },
    })
    return pengajuan;
}