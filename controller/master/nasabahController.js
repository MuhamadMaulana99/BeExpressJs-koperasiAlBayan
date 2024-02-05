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
      mstNik,
      mstjenisKelamin,
      mstAlamat,
      mstKecamatan,
      mstKabupaten,
      mstProvinsi
    } = req.body
    const add = await masterNasabah.create({
      nama,
      mstRekening,
      mstNik,
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
      attributes: ['id', 'nama', 'mstNik', 'mstRekening', 'mstjenisKelamin', 'mstAlamat', 'mstKecamatan', 'mstKabupaten', 'mstProvinsi']
    })
    const val = get?.map((value)=> {
      return {
        ...value.dataValues,
        mstjenisKelamin: JSON.parse(value?.mstjenisKelamin)
      }
    })
    res.json(val)
  },
  getNasabahId: async (req, res, next) => {
    const { id } = req.params;
    try {
      const get = await masterNasabah.findOne({ where: { id} });
  
      if (get) {
        return res.status(200).json(get);
      } else {
        return res.status(404).json({ message: 'Record not found' });
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

  },
  getNasabahRekening: async (req, res, next) => {
    const { mstRekening } = req.params;
    try {
      const get = await masterNasabah.findOne({ where: { mstRekening} });
  
      if (get) {
        return res.status(200).json(get);
      } else {
        return res.status(404).json({ message: 'Record not found' });
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

  },
  putNasabah: async (req, res) => {
    // console.log(req.params, 'sss')
    const id = req.params.id
    const {
      nama,
      mstNik,
      mstRekening,
      mstjenisKelamin,
      mstAlamat,
      mstKecamatan,
      mstKabupaten,
      mstProvinsi
    } = req.body
    const put = await masterNasabah.update({
      nama,
      mstNik,
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