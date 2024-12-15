const Sequelize = require('sequelize');

// const sequelize = new Sequelize('dbTokoBangunan', 'postgres', 'postgres', {
//   host: 'localhost',
//   dialect: 'postgres'
// });
const sequelize = new Sequelize('db_alBayan', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // Ganti dengan dialect yang Anda gunakan
  // dialectOptions: {
  //   charset: 'utf8mb4', // Gunakan utf8mb4
  //   collate: 'utf8mb4_unicode_ci', // Atur collate yang sesuai
  // },
  // logging: console.log, // Aktifkan logging untuk debugging
});

const pengajuan = require('./koperasi/pengajuanModel.js')(sequelize, Sequelize.DataTypes);
const angsuran = require('./koperasi/angsuranModel.js')(sequelize, Sequelize.DataTypes);
const permohonan = require('./koperasi/permohonanModel.js')(sequelize, Sequelize.DataTypes);

const masterAnalisa = require('./master/analisaModel.js')(sequelize, Sequelize.DataTypes);
const masterNasabah = require('./master/nasabahModel.js')(sequelize, Sequelize.DataTypes);

const loginModel = require('./Auth/loginModels.js')(sequelize, Sequelize.DataTypes);
const db = {
  sequelize,
  models: { loginModel: loginModel, angsuran, permohonan:permohonan, pengajuan: pengajuan , masterAnalisa: masterAnalisa, masterNasabah:masterNasabah },

}
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = db