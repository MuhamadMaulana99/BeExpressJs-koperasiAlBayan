const Sequelize = require('sequelize');

// const sequelize = new Sequelize('dbTokoBangunan', 'postgres', 'postgres', {
//   host: 'localhost',
//   dialect: 'postgres'
// });
const sequelize = new Sequelize('db_alBayan', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// const suplayerModel = require('./bangunanModel/suplayerModels.js')(sequelize, Sequelize.DataTypes);
// const dataBarangsModel = require('./bangunanModel/dataBarangModels.js')(sequelize, Sequelize.DataTypes);
// const barangMasukModel = require('./bangunanModel/barangMasukModels.js')(sequelize, Sequelize.DataTypes);
// const barangKeluarModel = require('./bangunanModel/barangKeluarModels.js')(sequelize, Sequelize.DataTypes);
// const masterBarang = require('./masterModel/masterBarangModels.js')(sequelize, Sequelize.DataTypes);
const pengajuan = require('./koperasi/pengajuanModel.js')(sequelize, Sequelize.DataTypes);
const angsuran = require('./koperasi/angsuranModel.js')(sequelize, Sequelize.DataTypes);
const permohonan = require('./koperasi/permohonanModel.js')(sequelize, Sequelize.DataTypes);
const loginModel = require('./Auth/loginModels.js')(sequelize, Sequelize.DataTypes);
const db = {
  sequelize,
  models: { loginModel: loginModel, angsuran, permohonan:permohonan, pengajuan: pengajuan },

}
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = db