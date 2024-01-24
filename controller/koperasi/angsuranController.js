const {models: {angsuran}} = require('../../model/index.js');

module.exports = {
    addAngsuran: async (req, res)=>{
        const {nomor_akad, staff_basil, staff_pokok,acc_basil, staff_by,staff_at, kasir_by, kasir_at } = req.body
        const add = await angsuran.create({nomor_akad, staff_basil, staff_pokok,acc_basil, staff_by,staff_at, kasir_by, kasir_at})
        res.json(add)
    },
    getAngsuran: async (req, res)=>{
        const get = await angsuran.findAll({
            attributes: ['id','nomor_akad', 'staff_basil', 'staff_pokok','acc_basil', 'staff_by','staff_at', 'kasir_by', 'kasir_at']
          })
        res.json(get)
    },
    putAngsuran: async (req, res)=>{
        const id = req.params.id
        const {nomor_akad, staff_basil, staff_pokok,acc_basil, staff_by,staff_at, kasir_by, kasir_at } = req.body
        const put = await angsuran.update({ nomor_akad, staff_basil, staff_pokok,acc_basil, staff_by,staff_at, kasir_by, kasir_at }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteAngsuran: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await angsuran.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}