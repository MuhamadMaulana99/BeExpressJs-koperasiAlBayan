const {models: {angsuran}} = require('../../model/index.js');

module.exports = {
    addAngsuran: async (req, res)=>{
        const {namaNasabah, nomorAkad, staffBasil, staffPokok,accBasil,accPokok, staffBy,staffAt, kasirBy, kasirAtt, lokasiPembayaran } = req.body
        const add = await angsuran.create({namaNasabah,nomorAkad, staffBasil, accPokok, staffPokok,accBasil, staffBy,staffAt, kasirBy, kasirAtt, lokasiPembayaran})
        res.json(add)
    },
    getAngsuran: async (req, res)=>{
        const get = await angsuran.findAll({
            attributes: ['id','namaNasabah','nomorAkad', 'staffBasil', 'staffPokok','accBasil','accPokok', 'staffBy','staffAt', 'kasirBy', 'kasirAtt', 'lokasiPembayaran']
          })
          const val = get?.map((value)=> {
            return {
              ...value.dataValues,
              nomorAkad: JSON.parse(value?.nomorAkad)
            }
          })
        res.json(val)
    },
    putAngsuran: async (req, res)=>{
        const id = req.params.id
        const {namaNasabah,nomorAkad, staffBasil, staffPokok,accBasil,accPokok, staffBy,staffAt, kasirBy, kasirAtt, lokasiPembayaran } = req.body
        const put = await angsuran.update({ namaNasabah, nomorAkad, staffBasil, accPokok, staffPokok,accBasil, staffBy,staffAt, kasirBy, kasirAtt, lokasiPembayaran }, {
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