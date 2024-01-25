const {models: {masterAnalisa}} = require('../../model/index.js');

module.exports = {
    addAnalisa: async (req, res)=>{
        const {kodeAnalisa, nama } = req.body
        const add = await masterAnalisa.create({kodeAnalisa, nama})
        res.json(add)
    },
    getAnalisa: async (req, res)=>{
        const get = await masterAnalisa.findAll({
            attributes: ['id','kodeAnalisa', 'nama']
          })
        res.json(get)
    },
    putAnalisa: async (req, res)=>{
        const id = req.params.id
        const {kodeAnalisa, nama } = req.body
        const put = await masterAnalisa.update({ kodeAnalisa, nama }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteAnalisa: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await masterAnalisa.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}