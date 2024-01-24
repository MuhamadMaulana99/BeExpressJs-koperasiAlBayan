// const { DataTypes } = require('sequelize')
// const sequelize = require('./index.js')

module.exports = (sequelize, DataTypes)=>{
    const login = sequelize.define('tb_login',{
        username: {
            type: DataTypes.STRING(20),
            default: null,
        },
        password: {
            type: DataTypes.STRING(20),
            default: null,
        },
        userRoles: {
            type: DataTypes.STRING(50),
            default: null,
        },
    })
    return login;
}