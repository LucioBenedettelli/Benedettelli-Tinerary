const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = {
  register: async (req, res) => {
    var errores = [];
    const {
      name,
      lastname,
      username,
      email,
      password,
      URLpic,
      country,
    } = req.body;
    const userExists = await User.findOne({ username: username });
    if (userExists) {
      errores.push(
        "El nombre de usuario ya está siendo utilizado.  Elija otro."
      );
    }

    if (errores.length === 0) {
      const passwordHasheado = bcryptjs.hashSync(password, 10);

      var newUser = new User({
        name,
        lastname,
        username,
        email,
        password: passwordHasheado,
        URLpic,
        country,
      });
      var newUserSaved = await newUser.save();
      var token = jwt.sign({ ...newUserSaved }, process.env.SECRET_KEY, {});
      console.log(token);
    }

    return res.json({
      success: errores.length === 0 ? true : false,
      errores: errores,
      response: errores.length === 0 && {
        token,
        name: newUserSaved.name,
        URLpic: newUserSaved.URLpic,
      },
    });
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const userExists = await User.findOne({ username: username });
    if (!userExists) {
      return res.json({
        success: false,
        mensaje: "Nombre de usuario y/o contraseña incorrectos.",
      });
    }
    const passwordMatches = bcryptjs.compareSync(password, userExists.password);
    if (!passwordMatches) {
      return res.json({
        success: false,
        mensaje: "Nombre de usuario y/o contraseña incorrectos.",
      });
    }

    var token = jwt.sign({ ...userExists }, process.env.SECRET_KEY, {});
    return res.json({
      success: true,
      response: { token, name: userExists.name, URLpic: userExists.URLpic },
    });
  },

  logFromLS: (req, res) => {
    res.json({
      success: true,
      response: {
        token: req.body.token,
        name: req.user.name,
        URLpic: req.user.URLpic,
      },
    });
  },
};

module.exports = userController;
