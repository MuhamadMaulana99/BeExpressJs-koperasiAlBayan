const {models: {masterKasir}} = require('../../model/index.js');

module.exports = {
    addKasir: async (req, res)=>{
        const {kodeKasir, nama } = req.body
        const add = await masterKasir.create({kodeKasir, nama})
        res.json(add)
    },
    getKasir: async (req, res)=>{
        const get = await masterKasir.findAll({
            attributes: ['id','kodeKasir', 'nama']
          })
        res.json(get)
    },
    putKasir: async (req, res)=>{
        const id = req.params.id
        const {kodeKasir, nama } = req.body
        const put = await masterKasir.update({ kodeKasir, nama }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteKasir: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await masterKasir.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}