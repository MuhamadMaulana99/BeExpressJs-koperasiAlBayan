const {models: {masterStaff}} = require('../../model/index.js');

module.exports = {
    addStaff: async (req, res)=>{
        const {kodeStaff, nama } = req.body
        const add = await masterStaff.create({kodeStaff, nama})
        res.json(add)
    },
    getStaff: async (req, res)=>{
        const get = await masterStaff.findAll({
            attributes: ['id','kodeStaff', 'nama']
          })
        res.json(get)
    },
    putStaff: async (req, res)=>{
        const id = req.params.id
        const {kodeStaff, nama } = req.body
        const put = await masterStaff.update({ kodeStaff, nama }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteStaff: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await masterStaff.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}