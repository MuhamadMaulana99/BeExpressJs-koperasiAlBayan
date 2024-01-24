module.exports = (sequelize, DataTypes)=>{
    const angsuran = sequelize.define('tb_angsuran',{
        nomor_akad: {
            type: DataTypes.STRING(255),
            default: null,
        },
        staff_basil: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        staff_pokok: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        acc_basil: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        staff_by: {
            type: DataTypes.STRING(255),
            default: null,
        },
        staff_at: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
        kasir_by: {
            type: DataTypes.STRING(255),
            default: null,
        },
        kasir_at: {
            type: DataTypes.INTEGER(11),
            default: null,
        },
    })
    return angsuran;
}