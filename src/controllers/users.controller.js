const Users = require("../models/users");
const bcrypt = require("bcrypt");

exports.listUsers = async (req, res) => {
  try {
    const response = await Users.findAll();
    return res.status(200).json({ data: response });
  } catch (error) {
    res.status(500).send({ message: `Error al intentar listar usuarios ${error}`, data: {} });
  }
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    let newUsers = await Users.create({
      name,
      email,
      password: bcrypt.hashSync(req.body.password, 10)
    });

    if (newUsers)
      res.status(200).json({ message: `Usuario creado correctamente` });
  } catch (error) {
    res.status(500).send({ message: `Error al intentar crear usuario ${error}` });
  }
};
