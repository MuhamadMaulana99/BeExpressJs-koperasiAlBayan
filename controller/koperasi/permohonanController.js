const {models: {permohonan}} = require('../../model/index.js');

module.exports = {
    addPermohonan: async (req, res)=>{
        const {rekening, namaNasabah, jenisKelamin,alamat, kecamatan,kabupaten, provinsi, saldoTabungan } = req.body
        const add = await permohonan.create({rekening, namaNasabah, jenisKelamin,alamat, kecamatan,kabupaten, provinsi, saldoTabungan})
        res.json(add)
    },
    getPermohonan: async (req, res)=>{
        const get = await permohonan.findAll({
            attributes: ['id','rekening', 'namaNasabah', 'jenisKelamin','alamat', 'kecamatan','kabupaten', 'provinsi', 'saldoTabungan']
          })
        res.json(get)
    },
    putPermohonan: async (req, res)=>{
        const id = req.params.id
        const {rekening, namaNasabah, jenisKelamin,alamat, kecamatan,kabupaten, provinsi, saldoTabungan } = req.body
        const put = await permohonan.update({ rekening, namaNasabah, jenisKelamin,alamat, kecamatan,kabupaten, provinsi, saldoTabungan }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deletePermohonan: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await permohonan.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}