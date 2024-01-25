const Sequelize = require('sequelize');

// const sequelize = new Sequelize('dbTokoBangunan', 'postgres', 'postgres', {
//   host: 'localhost',
//   dialect: 'postgres'
// });
const sequelize = new Sequelize('db_alBayan', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const pengajuan = require('./koperasi/pengajuanModel.js')(sequelize, Sequelize.DataTypes);
const angsuran = require('./koperasi/angsuranModel.js')(sequelize, Sequelize.DataTypes);
const permohonan = require('./koperasi/permohonanModel.js')(sequelize, Sequelize.DataTypes);

const masterAnalisa = require('./master/analisaModel.js')(sequelize, Sequelize.DataTypes);
const masterKasir = require('./master/kasirModel.js')(sequelize, Sequelize.DataTypes);
const masterStaff = require('./master/staffModel.js')(sequelize, Sequelize.DataTypes);

const loginModel = require('./Auth/loginModels.js')(sequelize, Sequelize.DataTypes);
const db = {
  sequelize,
  models: { loginModel: loginModel, angsuran, permohonan:permohonan, pengajuan: pengajuan , masterAnalisa: masterAnalisa, masterKasir:masterKasir, masterStaff: masterStaff },

}
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = db