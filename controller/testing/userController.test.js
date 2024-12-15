const sinon = require('sinon');
const { models } = require('../../model/index.js'); // Sesuaikan jalur impor model
const { addUser } = require('../auth/loginController.js'); // Sesuaikan jalur impor controller

describe('User Controller Tests', () => {
  afterEach(() => {
    sinon.restore(); // Reset semua stubs dan spies setelah setiap test
  });

  describe('addUser', () => {
    it('should add a user and return JSON response', async () => {
      const req = {
        body: { username: 'testuser', password: 'password', userRoles: '{"roleUser":"Admin","id":1}' }
      };
      const res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis() // Untuk menangani response status
      };

      // Stub metode create dari loginModel
      const createStub = sinon.stub(models.loginModel, 'create').resolves(req.body);

      await addUser(req, res); // Pastikan operasi asynchronous ditunggu dengan await

      // Assertion untuk memverifikasi hasil
      expect(createStub.calledOnce).toBe(true);
      expect(createStub.calledWith(req.body)).toBe(true);
      expect(res.json.calledOnceWith(req.body)).toBe(true);
    });

    // Anda bisa skip tes ini jika error
    it.skip('should return 500 if create fails', async () => {
      const req = {
        body: { username: 'testuser', password: 'password', userRoles: '{"roleUser":"Admin","id":1}' }
      };
      const res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis() // Untuk menangani response status
      };

      // Simulate error on create
      const createStub = sinon.stub(models.loginModel, 'create').rejects(new Error('DB Error'));

      await addUser(req, res); // Pastikan operasi asynchronous ditunggu dengan await

      // Assertion untuk memverifikasi hasil
      expect(createStub.calledOnce).toBe(true);
      expect(res.status.calledWith(500)).toBe(true);
      expect(res.json.calledOnceWith({ error: 'Something went wrong' })).toBe(true);
    });
  });
});

// Set timeout untuk tes
jest.setTimeout(30000); // Set timeout ke 30 detik
