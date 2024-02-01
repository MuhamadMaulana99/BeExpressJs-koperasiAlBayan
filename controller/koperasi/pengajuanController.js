const { models: { pengajuan } } = require('../../model/index.js');

module.exports = {
  addPengajuan: async (req, res) => {
    const { nasabahId, penjualan, hargaPokok, biaya, labaUsaha, pendapatanLain, jumlahPendapatan, kebutuhanRumahTangga, biayaPendidikan,   , jumlahBiayaLuarUsaha, pendapatanBersih, rasioAngsuran, jangkaWaktu, nominalPermohonan, tujuanPembiayaan, jaminan, accPermohonan, nomorAkad, status, statusBy, statusAt, foto } = req.body
    const add = await pengajuan.create({ nasabahId, penjualan, hargaPokok, biaya, labaUsaha, pendapatanLain, jumlahPendapatan, kebutuhanRumahTangga, biayaPendidikan, biayaLainya, jumlahBiayaLuarUsaha, pendapatanBersih, rasioAngsuran, jangkaWaktu, nominalPermohonan, tujuanPembiayaan, jaminan, accPermohonan, nomorAkad, status, statusBy, statusAt, foto })
    res.json(add)
  },
  getPengajuan: async (req, res) => {
    const get = await pengajuan.findAll({
      attributes: ['nasabahId', 'penjualan', 'hargaPokok', 'biaya', 'labaUsaha', 'pendapatanLain', 'jumlahPendapatan', 'kebutuhanRumahTangga', 'biayaPendidikan', 'biayaLainya', 'jumlahBiayaLuarUsaha', 'pendapatanBersih', 'rasioAngsuran', 'jangkaWaktu', 'nominalPermohonan', 'tujuanPembiayaan', 'jaminan', 'accPermohonan', 'nomorAkad', 'status', 'statusBy', 'statusAt', 'foto']
    })
    res.json(get)
  },

  putPengajuan: async (req, res) => {
    const id = req.params.id
    const { nasabahId, penjualan, hargaPokok, biaya, labaUsaha, pendapatanLain, jumlahPendapatan, kebutuhanRumahTangga, biayaPendidikan, biayaLainya,jumlahBiayaLuarUsaha, pendapatanBersih, rasioAngsuran, jangkaWaktu, nominalPermohonan, tujuanPembiayaan, jaminan, accPermohonan, nomorAkad, status, statusBy, statusAt, foto } = req.body
    const put = await pengajuan.update({ nasabahId, penjualan, hargaPokok, biaya, labaUsaha, pendapatanLain, jumlahPendapatan, kebutuhanRumahTangga, biayaPendidikan, biayaLainya, jumlahBiayaLuarUsaha, pendapatanBersih, rasioAngsuran, jangkaWaktu, nominalPermohonan, tujuanPembiayaan, jaminan, accPermohonan, nomorAkad, status, statusBy, statusAt, foto }, {
      where: {
        id,
      }
    })
    res.json(put)
  },
  
  deletePengajuan: async (req, res) => {
    const id = req.params.id
    // console.log(req.params, 'idd')
    const del = await pengajuan.destroy({
      where: {
        id,
      }
    })
    return res.json(req.params)

  }
}