const {models: {barangKeluar,dataBarangsModel}} = require('../../model/index.js');

module.exports = {
    addUser: async (req, res)=>{
        const {tglKeluar, kodeBarang, namaBarang, jmlKeluar } = req.body
        const findBarangMasuk = await dataBarangsModel.findOne({ where: { kodeBarang} });
        try {
          if(findBarangMasuk){
            await dataBarangsModel.update({ jumlahMasuk: parseInt(findBarangMasuk.jumlahMasuk ) - parseInt(jmlKeluar) }, {
              where: {
                kodeBarang
              }
            });
          }else{
            const add = await dataBarangsModel.create({deskripsi, hargaBarang, kodeBarang,namaBarang, jumlahMasuk, satuan});
          }
          const add = await barangKeluar.create({tglKeluar, kodeBarang,namaBarang, jmlKeluar})
          res.json(add)
        } catch (error) { 
          return res.status(400).json({ message: ' Belum Tersedia Di Data Barang',
          data: JSON.parse(kodeBarang)});
        }
    },
    getUser: async (req, res)=>{
        const get = await barangKeluar.findAll({
            attributes: ['id','tglKeluar', 'kodeBarang', 'namaBarang', 'jmlKeluar']
          })
          const val = get?.map((value)=> {
            return {
              ...value.dataValues,
              kodeBarang: JSON.parse(value?.kodeBarang)
            }
          })
        res.json(val);
    },
    putUser: async (req, res)=>{
        const id = req.params.id
        const {tglKeluar, kodeBarang,namaBarang, jmlKeluar } = req.body
        const put = await barangKeluar.update({ tglKeluar, kodeBarang, namaBarang, jmlKeluar }, {
            where: {
              id,
            }
          })
        res.json(put)
    },
    deleteUser: async (req, res)=>{
        const id = req.params.id
        // console.log(req.params, 'idd')
        const del = await barangKeluar.destroy({
            where: {
              id,
            }
          })
        return res.json(req.params)

    }
}