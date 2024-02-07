const expess = require('express');
;
const loginController= require('../controller/auth/loginController.js');

const pengajuanController = require('../controller/koperasi/pengajuanController.js');
const permohonanController = require('../controller/koperasi/permohonanController.js');
const angsuranController = require('../controller/koperasi/angsuranController.js');

const masterAnalisaController = require('../controller/master/analisaController.js');
const masterNasabahController = require('../controller/master/nasabahController.js');
const validation = require('../validation/user/validation.js');

const routers = expess.Router();

routers.post('/login',loginController.LoginUser);
routers.post('/register',loginController.addUser);
routers.get('/allUser',loginController.getUser);
routers.get('/allUserByRoles',loginController.getUserByRole);
routers.delete('/allUser/:id',loginController.deleteUser);
routers.put('/allUser/:id',loginController.putUser);

routers.get('/angsuran',angsuranController.getAngsuran);
routers.post('/angsuran',angsuranController.addAngsuran);
routers.delete('/angsuran/:id',angsuranController.deleteAngsuran);
routers.put('/angsuran/:id',angsuranController.putAngsuran);

routers.get('/permohonan',permohonanController.getPermohonan);
routers.get('/permohonanByApprove',permohonanController.getPermohonanByApprove);
routers.post('/permohonan',permohonanController.addPermohonan);
routers.delete('/permohonan/:id',permohonanController.deletePermohonan);
routers.put('/permohonan/:id',permohonanController.putPermohonan);
routers.put('/approvalPermohonan/:id',permohonanController.approvalPermohonan);

routers.get('/pengajuan',pengajuanController.getPengajuan);
routers.get('/pengajuanByNoAkad',pengajuanController.getPengajuanByNoAkad);
routers.post('/pengajuan',pengajuanController.addPengajuan);
routers.delete('/pengajuan/:id',pengajuanController.deletePengajuan);
routers.put('/pengajuanByApprove/:id',pengajuanController.approvalPengajuan);
routers.put('/pengajuan/:id',pengajuanController.putPengajuan);

routers.get('/masterAnalisa',masterAnalisaController.getAnalisa);
routers.post('/masterAnalisa',masterAnalisaController.addAnalisa);
routers.delete('/masterAnalisa/:id',masterAnalisaController.deleteAnalisa);
routers.put('/masterAnalisa/:id',masterAnalisaController.putAnalisa);

routers.get('/masterNasabah',masterNasabahController.getNasabah);
routers.get('/masterNasabah/:id',masterNasabahController.getNasabahId);
routers.get('/masterNasabahByRekening/:mstRekening',masterNasabahController.getNasabahRekening);
routers.post('/masterNasabah',masterNasabahController.addNasabah);
routers.delete('/masterNasabah/:id',masterNasabahController.deleteNasabah);
routers.put('/masterNasabah/:id',masterNasabahController.putNasabah);


module.exports = routers;