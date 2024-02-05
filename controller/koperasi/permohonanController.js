const {
  models: {
    permohonan,
    masterNasabah
  }
} = require('../../model/index.js');

module.exports = {
  addPermohonan: async (req, res) => {
    const {
      rekening,
      namaNasabah,
      jenisKelamin,
      alamat,
      kecamatan,
      kabupaten,
      provinsi,
      statusPermohonan,
      hasilPermohonan,
      persentase,
      saldoTabungan
    } = req.body
    const add = await permohonan.create({
      rekening,
      namaNasabah,
      jenisKelamin,
      alamat,
      kecamatan,
      kabupaten,
      provinsi,
      statusPermohonan,
      hasilPermohonan,
      persentase,
      saldoTabungan
    })
    res.json(add)
  },
  getPermohonan: async (req, res) => {
    const get = await permohonan.findAll({
      attributes: ['id', 'rekening', 'namaNasabah', 'jenisKelamin', 'alamat', 'kecamatan', 'kabupaten', 'provinsi', 'statusPermohonan', 'hasilPermohonan', 'persentase', 'saldoTabungan']
    })
    res.json(get)
  },
  getPermohonanByApprove: async (req, res) => {
    
    const getPermohonan = await permohonan.findAll({
      where: { hasilPermohonan: 1},
      attributes: ['id', 'rekening', 'namaNasabah', 'jenisKelamin', 'alamat', 'kecamatan', 'kabupaten', 'provinsi', 'statusPermohonan', 'saldoTabungan']
    })

    res.json(getPermohonan)
  },
  putPermohonan: async (req, res) => {
    const id = req.params.id
    const {
      rekening,
      namaNasabah,
      jenisKelamin,
      alamat,
      kecamatan,
      kabupaten,
      provinsi,
      // statusPermohonan,
      saldoTabungan
    } = req.body
    const put = await permohonan.update({
      rekening,
      namaNasabah,
      jenisKelamin,
      alamat,
      kecamatan,
      kabupaten,
      provinsi,
      // statusPermohonan,
      saldoTabungan
    }, {
      where: {
        id,
      }
    })
    res.json(put)
  },
  approvalPermohonan: async (req, res) => {
    const id = req.params.id
    const {
      statusPermohonan,
      hasilPermohonan,
      persentase
    } = req.body
    const put = await permohonan.update({
      statusPermohonan, persentase, hasilPermohonan
    }, {
      where: {
        id,
      }
    })
    res.json(put)
  },
  deletePermohonan: async (req, res) => {
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