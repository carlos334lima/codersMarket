import Users from "../models/User";
import * as yup from "yup";
import jwt from "jsonwebtoken";
import config from "../../config/auth";

const USER_SCHEMA_CREATE_ACCOUNT = {
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required(),
};

const USER_SCHEMA_LOGIN = {
  email: yup.string().required().email(),
  password: yup.string().required(),
};

class UserControllers {
  async index(req, res) {
    return res.status(200).json({
      name: "Carlos Lima",
    });
  }

  async signIn(req, res) {
    const { name, password, email } = req.body;

    try {
      await yup
        .object()
        .shape(USER_SCHEMA_CREATE_ACCOUNT)
        .validate({ name, password, email });
      const newUser = await Users.create({ name, password, email });

      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {
      await yup.object().shape(USER_SCHEMA_LOGIN).validate({ email, password });
      const userFind = await Users.finOne({ password, email });

      if (userFind.status) {
        return res.status(201).json({
          user: userFind.user,
          token: jwt.sign({ id: userFind.user.id }, config.secret, {
            expiresIn: config.expiresIn,
          }),
        });
      } else {
        return res.status(400).json({ error: userFind.message });
      }
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new UserControllers();
