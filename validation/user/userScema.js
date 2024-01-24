const Joi = require('joi');

module.exports = {
    addUser: Joi.object({
        name: Joi.string().required(),
        alamat: Joi.string().required(),
        noTlp: Joi.number().integer().required(),
    })
}