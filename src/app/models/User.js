import bcrypt from "bcryptjs";

const MOCK_USER = [];

class Users {
  async finOne(query) {
    const { email, password } = query;
    const user = MOCK_USER.find((user) => user.email === email);

    if (user !== undefined) {
      const result = await this.checkPassword(password, user.password);

      if (result) {
        return {
          status: true,
          user,
        };
      } else {
        return {
          status: false,
          message: "email or password invalid.",
        };
      }
    } else {
      return {
        status: false,
        message: "user not existed.",
      };
    }
  }

  async create({ password, ...user }) {
    const newUser = {
      id: MOCK_USER.length.toString(),
      password: await this.hashPassword(password),
      ...user,
    };
    MOCK_USER.push(newUser);
    return newUser;
  }

  async hashPassword(password) {
    return bcrypt.hash(password, 8);
  }

  async checkPassword(password, hashPassword) {
    return bcrypt.compare(password, hashPassword);
  }
}

export default new Users();
