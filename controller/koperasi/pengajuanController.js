const { models: { pengajuan } } = require('../../model/index.js');
const { Model, Sequelize, DataTypes } = require('sequelize');

module.exports = {
  addPengajuan: async (req, res) => {
    const { rekening,namaNasabah, penjualan, hargaPokok, biaya, labaUsaha, pendapatanLain, jumlahPendapatan, kebutuhanRumahTangga, biayaPendidikan,biayaLainya, jumlahBiayaLuarUsaha, pendapatanBersih, rasioAngsuran, jangkaWaktu, nominalPermohonan, tujuanPembiayaan, jaminan, accPermohonan, nomorAkad, status, statusBy, statusAt, foto } = req.body
    const add = await pengajuan.create({ rekening, namaNasabah, penjualan, hargaPokok, biaya, labaUsaha, pendapatanLain, jumlahPendapatan, kebutuhanRumahTangga, biayaPendidikan, biayaLainya, jumlahBiayaLuarUsaha, pendapatanBersih, rasioAngsuran, jangkaWaktu, nominalPermohonan, tujuanPembiayaan, jaminan, accPermohonan, nomorAkad, status, statusBy, statusAt, foto })
    res.json(add)
  },

  getPengajuan: async (req, res) => {
    const get = await pengajuan.findAll({
      attributes: [ 'id', 'rekening', 'namaNasabah', 'penjualan', 'hargaPokok', 'biaya', 'labaUsaha', 'pendapatanLain', 'jumlahPendapatan', 'kebutuhanRumahTangga', 'biayaPendidikan', 'biayaLainya', 'jumlahBiayaLuarUsaha', 'pendapatanBersih', 'rasioAngsuran', 'jangkaWaktu', 'nominalPermohonan', 'tujuanPembiayaan', 'jaminan', 'accPermohonan', 'nomorAkad', 'status', 'statusBy', 'statusAt', 'foto']
    })
    res.json(get)
  },
  getPengajuanByNoAkad: async (req, res) => {
    const get = await pengajuan.findAll({
      where: { nomorAkad: {
        [Sequelize.Op.not]: null,
      }},
      attributes: ['id', 'nomorAkad']
    })
    // console.log(get, 'gett')
    // const val = get?.map((value) => {
    //   return {
    //     ...value.dataValues,
    //     userRoles: JSON.parse(value?.userRoles)
    //   }
    // })
    res.json(get)
  },

  putPengajuan: async (req, res) => {
    const id = req.params.id
    const { rekening, namaNasabah, penjualan, hargaPokok, biaya, labaUsaha, pendapatanLain, jumlahPendapatan, kebutuhanRumahTangga, biayaPendidikan, biayaLainya,jumlahBiayaLuarUsaha, pendapatanBersih, rasioAngsuran, jangkaWaktu, nominalPermohonan, tujuanPembiayaan, jaminan, accPermohonan, nomorAkad, status, statusBy, statusAt, foto } = req.body
    const put = await pengajuan.update({  rekening, namaNasabah,  penjualan, hargaPokok, biaya, labaUsaha, pendapatanLain, jumlahPendapatan, kebutuhanRumahTangga, biayaPendidikan, biayaLainya, jumlahBiayaLuarUsaha, pendapatanBersih, rasioAngsuran, jangkaWaktu, nominalPermohonan, tujuanPembiayaan, jaminan, accPermohonan, nomorAkad, status, statusBy, statusAt, foto }, {
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