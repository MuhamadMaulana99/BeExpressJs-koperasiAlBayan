const {
  models: { permohonan, masterNasabah },
} = require("../../model/index.js");

module.exports = {
  addPermohonan: async (req, res) => {
    try {
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
        saldoTabungan,
      } = req.body;

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
        saldoTabungan,
      });

      res.json(add);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to add permohonan", error });
    }
  },

  getPermohonan: async (req, res) => {
    try {
      const get = await permohonan.findAll({
        attributes: [
          "id",
          "rekening",
          "namaNasabah",
          "jenisKelamin",
          "alamat",
          "kecamatan",
          "kabupaten",
          "provinsi",
          "statusPermohonan",
          "hasilPermohonan",
          "persentase",
          "saldoTabungan",
        ],
      });

      const val = get?.map((value) => {
        return {
          ...value.dataValues,
          namaNasabah: JSON.parse(value?.namaNasabah),
        };
      });

      res.json(val);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve permohonan", error });
    }
  },

  getPermohonanByApprove: async (req, res) => {
    try {
      const getPermohonan = await permohonan.findAll({
        where: { hasilPermohonan: 1 },
        attributes: [
          "id",
          "rekening",
          "namaNasabah",
          "jenisKelamin",
          "alamat",
          "kecamatan",
          "kabupaten",
          "provinsi",
          "statusPermohonan",
          "saldoTabungan",
        ],
      });

      res.json(getPermohonan);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Failed to retrieve approved permohonan",
        error,
      });
    }
  },

  putPermohonan: async (req, res) => {
    try {
      const id = req.params.id;
      const {
        rekening,
        namaNasabah,
        jenisKelamin,
        alamat,
        kecamatan,
        kabupaten,
        provinsi,
        saldoTabungan,
      } = req.body;

      const put = await permohonan.update(
        {
          rekening,
          namaNasabah,
          jenisKelamin,
          alamat,
          kecamatan,
          kabupaten,
          provinsi,
          saldoTabungan,
        },
        {
          where: { id },
        }
      );

      res.json(put);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to update permohonan", error });
    }
  },

  approvalPermohonan: async (req, res) => {
    try {
      const id = req.params.id;
      const { statusPermohonan, hasilPermohonan, persentase } = req.body;

      const put = await permohonan.update(
        {
          statusPermohonan,
          hasilPermohonan,
          persentase,
        },
        {
          where: { id },
        }
      );

      res.json(put);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to approve permohonan", error });
    }
  },

  deletePermohonan: async (req, res) => {
    try {
      const id = req.params.id;

      const del = await permohonan.destroy({
        where: { id },
      });

      if (del) {
        res.json({ message: "Permohonan deleted successfully", id });
      } else {
        res.status(404).json({ message: "Permohonan not found", id });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to delete permohonan", error });
    }
  },
};
