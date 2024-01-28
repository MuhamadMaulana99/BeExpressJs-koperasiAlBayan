module.exports = (sequelize, DataTypes)=>{
    const angsuran = sequelize.define('tb_angsuran',{
        nomorAkad: {
            type: DataTypes.STRING(255),
            default: null,
        },
        staffBasil: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        staffPokok: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        accBasil: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        accPokok: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        staffBy: {
            type: DataTypes.STRING(255),
            default: null,
        },
        staffAt: {
            type: DataTypes.DATE,
            default: null,
        },
        kasirBy: {
            type: DataTypes.STRING(255),
            default: null,
        },
        kasirAtt: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        lokasiPembayaran: {
            type: DataTypes.STRING(255),
            default: null,
        },
    })
    return angsuran;
}