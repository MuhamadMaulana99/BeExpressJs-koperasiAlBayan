const {
  models: { angsuran },
} = require("../../model/index.js");

module.exports = {
  addAngsuran: async (req, res) => {
    try {
      const {
        namaNasabah,
        nomorAkad,
        staffBasil,
        staffPokok,
        accBasil,
        accPokok,
        staffBy,
        staffAt,
        kasirBy,
        kasirAtt,
        lokasiPembayaran,
      } = req.body;
      const add = await angsuran.create({
        namaNasabah,
        nomorAkad,
        staffBasil,
        accPokok,
        staffPokok,
        accBasil,
        staffBy,
        staffAt,
        kasirBy,
        kasirAtt,
        lokasiPembayaran,
      });
      res.status(201).json(add);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to add angsuran", error: error.message });
    }
  },

  getAngsuran: async (req, res) => {
    try {
      const get = await angsuran.findAll({
        attributes: [
          "id",
          "namaNasabah",
          "nomorAkad",
          "staffBasil",
          "staffPokok",
          "accBasil",
          "accPokok",
          "staffBy",
          "staffAt",
          "kasirBy",
          "kasirAtt",
          "lokasiPembayaran",
        ],
      });
      const val = get?.map((value) => {
        return {
          ...value.dataValues,
          nomorAkad: JSON.parse(value?.nomorAkad || "{}"),
        };
      });
      res.status(200).json(val);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to retrieve angsuran", error: error.message });
    }
  },

  putAngsuran: async (req, res) => {
    try {
      const id = req.params.id;
      const {
        namaNasabah,
        nomorAkad,
        staffBasil,
        staffPokok,
        accBasil,
        accPokok,
        staffBy,
        staffAt,
        kasirBy,
        kasirAtt,
        lokasiPembayaran,
      } = req.body;
      const put = await angsuran.update(
        {
          namaNasabah,
          nomorAkad,
          staffBasil,
          accPokok,
          staffPokok,
          accBasil,
          staffBy,
          staffAt,
          kasirBy,
          kasirAtt,
          lokasiPembayaran,
        },
        {
          where: { id },
        }
      );
      if (put[0] === 0) {
        return res.status(404).json({ message: "Angsuran not found" });
      }
      res.status(200).json({ message: "Angsuran updated successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to update angsuran", error: error.message });
    }
  },

  deleteAngsuran: async (req, res) => {
    try {
      const id = req.params.id;
      const del = await angsuran.destroy({
        where: { id },
      });
      if (del === 0) {
        return res.status(404).json({ message: "Angsuran not found" });
      }
      res.status(200).json({ message: "Angsuran deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to delete angsuran", error: error.message });
    }
  },
};
