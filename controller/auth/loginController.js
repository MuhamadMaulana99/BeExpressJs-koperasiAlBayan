const { models: { loginModel } } = require('../../model/index.js');

module.exports = {
  addUser: async (req, res) => {
    const { username, password, userRoles } = req.body
    const add = await loginModel.create({ username, password, userRoles })
    res.json(add)
  },
  LoginUser: async (req, res) => {
    const { username, password, userRoles } = req.body
    const user = await loginModel.findOne({ where: { username: username, password: password } })
    try {
      // console.log(res, 'ress')
      if (!user) {
        return res.status(401).json({
          message: 'username atau password salah',
          errorMesagge: `pasword ${password} salahh woii`
        })
      } else {
        return res.status(200).json({ message: 'Login Berhasil', response:  { id: user?.id, name: user?.username, userRoles: user?.userRoles } })
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Sequelize.ValidationError) {
        return res.status(400).json({ message: 'Validation error', errors: error.errors });
      } else if (error instanceof Sequelize.UniqueConstraintError) {
        return res.status(409).json({ message: 'Duplicate entry', errors: error.errors });
      } else {
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    }

  },
  getUser: async (req, res) => {
    const get = await loginModel.findAll({
      attributes: ['id', 'username', 'password', 'userRoles']
    })
    const val = get?.map((value)=> {
      return {
        ...value.dataValues,
        userRoles: JSON.parse(value?.userRoles)
      }
    })
    res.json(val)
  },
  putUser: async (req, res) => {
    const id = req.params.id
    const { username, password, userRoles } = req.body
    const put = await loginModel.update({ username, password, userRoles }, {
      where: {
        id,
      }
    })
    res.json(put)
  },
  deleteUser: async (req, res) => {
    const id = req.params.id
    const del = await loginModel.destroy({
      where: {
        id,
      }
    })
    try {
      // console.log(res, 'ress')
      if (!del) {
        return res.status(401).json({
          message: 'username atau password salah',
          errorMesagge: `pasword ${password} salahh woii`
        })
      } else {
        // return res.status(200).json({ message: 'Login Berhasil' })
        return res.json(req.params)
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error',errorMesagge: error });
    }
  

  }
}