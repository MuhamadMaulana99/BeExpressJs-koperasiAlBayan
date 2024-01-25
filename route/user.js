const expess = require('express');
;
const loginController= require('../controller/auth/loginController.js');

const pengajuanController = require('../controller/koperasi/pengajuanController.js');
const permohonanController = require('../controller/koperasi/permohonanController.js');
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

routers.get('/permohonan',permohonanController.getPermohonan);
routers.post('/permohonan',permohonanController.addPermohonan);
routers.delete('/permohonan/:id',permohonanController.deletePermohonan);
routers.put('/permohonan/:id',permohonanController.putPermohonan);

routers.get('/pengajuan',pengajuanController.getPengajuan);
routers.post('/pengajuan',pengajuanController.addPengajuan);
routers.delete('/pengajuan/:id',pengajuanController.deletePengajuan);
routers.put('/pengajuan/:id',pengajuanController.putPengajuan);

module.exports = routers;