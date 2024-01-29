const {
  models: {
    masterNasabah
  }
} = require('../../model/index.js');

module.exports = {
  addNasabah: async (req, res) => {
    const {
      nama,
      mstRekening,
      mstjenisKelamin,
      mstAlamat,
      mstKecamatan,
      mstKabupaten,
      mstProvinsi
    } = req.body
    const add = await masterNasabah.create({
      nama,
      mstRekening,
      mstjenisKelamin,
      mstAlamat,
      mstKecamatan,
      mstKabupaten,
      mstProvinsi
    })
    res.json(add)
  },
  getNasabah: async (req, res) => {
    const get = await masterNasabah.findAll({
      attributes: ['id', 'nama', 'mstRekening', 'mstjenisKelamin', 'mstAlamat', 'mstKecamatan', 'mstKabupaten', 'mstProvinsi']
    })
    res.json(get)
  },
  getNasabahId: async (req, res, next) => {
    const { id } = req.params;
    try {
      const get = await masterNasabah.findOne({ where: { id} })
      res.json(get)
  
      next();
      if (get) {
        res.status(200).json(get);
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }

  },
  putNasabah: async (req, res) => {
    // console.log(req.params, 'sss')
    const id = req.params.id
    const {
      nama,
      mstRekening,
      mstjenisKelamin,
      mstAlamat,
      mstKecamatan,
      mstKabupaten,
      mstProvinsi
    } = req.body
    const put = await masterNasabah.update({
      nama,
      mstRekening,
      mstjenisKelamin,
      mstAlamat,
      mstKecamatan,
      mstKabupaten,
      mstProvinsi
    }, {
      where: {
        id,
      }
    })
    res.json(put)
  },
  deleteNasabah: async (req, res) => {
    // console.log(req.params, 'sss')
    const id = req.params.id
    // console.log(req.params, 'idd')
    const del = await masterNasabah.destroy({
      where: {
        id,
      }
    })
    return res.json(req.params)

  }
}