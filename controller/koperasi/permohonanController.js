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
      saldoTabungan
    })
    res.json(add)
  },
  getPermohonan: async (req, res) => {
    const get = await permohonan.findAll({
      attributes: ['id', 'rekening', 'namaNasabah', 'jenisKelamin', 'alamat', 'kecamatan', 'kabupaten', 'provinsi', 'saldoTabungan']
    })
    res.json(get)
  },
  getPermohonanByDataNasabah: async (req, res) => {
    
    const getPermohonan = await permohonan.findAll({
      attributes: ['id', 'rekening', 'namaNasabah', 'jenisKelamin', 'alamat', 'kecamatan', 'kabupaten', 'provinsi', 'saldoTabungan']
    })
    const getDataNasabah = await masterNasabah.findAll({
      attributes: ['id', 'nama', 'mstNik', 'mstRekening', 'mstjenisKelamin', 'mstAlamat', 'mstKecamatan', 'mstKabupaten', 'mstProvinsi']
    })
    const result = getDataNasabah.filter(
      (item, index) => item?.tb_mst_nasabah?.dataValues?.mstRekening === getPermohonan[index]?.tb_Permohonan?.dataValues?.rekening
    );
    // console.log(getDataNasabah)
    const get = await loginModel.findAll({
      where: { userRoles: `{"roleUser":"Admin","id":2}` },
      attributes: ['id', 'username', 'password', 'userRoles']
    })
    console.log(get, 'gett')
    res.json(result)
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
    } = req.body
    const put = await permohonan.update({
      statusPermohonan
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