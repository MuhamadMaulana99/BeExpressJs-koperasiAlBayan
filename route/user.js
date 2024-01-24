const expess = require('express');
;
const loginController= require('../controller/auth/loginController.js');

const angsuranController = require('../controller/koperasi/angsuranController.js');
const validation = require('../validation/user/validation.js');

const routers = expess.Router();

routers.post('/login',loginController.LoginUser);
routers.post('/register',loginController.addUser);
routers.get('/allUser',loginController.getUser);
routers.delete('/allUser/:id',loginController.deleteUser);
routers.put('/allUser/:id',loginController.putUser);

routers.get('/angsuran',angsuranController.getAngsuran);
routers.post('/angsuran',angsuranController.addAngsuran);
routers.delete('/angsuran/:id',angsuranController.deleteAngsuran);
routers.put('/angsuran/:id',angsuranController.putAngsuran);

// routers.get('/suplayer',suplayerContoller.getUser);
// routers.post('/suplayer',suplayerContoller.addUser);
// routers.delete('/suplayer/:id',suplayerContoller.deleteUser);
// routers.put('/suplayer/:id',suplayerContoller.putUser);

// routers.get('/dataBarangs',dataBarangsContoller.getUser);
// routers.post('/dataBarangs',dataBarangsContoller.addUser);
// routers.delete('/dataBarangs/:id',dataBarangsContoller.deleteUser);
// routers.put('/dataBarangs/:id',dataBarangsContoller.putUser);

// routers.get('/barangKeluar',barangKeluarContoller.getUser);
// routers.post('/barangKeluar',barangKeluarContoller.addUser);
// routers.delete('/barangKeluar/:id',barangKeluarContoller.deleteUser);
// routers.put('/barangKeluar/:id',barangKeluarContoller.putUser);

// routers.get('/barangMasuk',barangMasukContoller.getUser);
// routers.post('/barangMasuk',barangMasukContoller.addUser);
// routers.delete('/barangMasuk/:id',barangMasukContoller.deleteUser);
// routers.put('/barangMasuk/:id',barangMasukContoller.putUser);

// routers.get('/mstBarangs',masterBarangContoller.getUser);
// routers.post('/mstBarangs',masterBarangContoller.addUser);
// routers.delete('/mstBarangs/:id',masterBarangContoller.deleteUser);
// routers.put('/mstBarangs/:id',masterBarangContoller.putUser);

// routers.get('/mstSatuan',masterSatuanContoller.getUser);
// routers.post('/mstSatuan',masterSatuanContoller.addUser);
// routers.delete('/mstSatuan/:id',masterSatuanContoller.deleteUser);
// routers.put('/mstSatuan/:id',masterSatuanContoller.putUser);

module.exports = routers;