class UserControllers {
  async index(req, res) {
    return res.status(200).json({
      name: "Carlos Lima",
    });
  }
}

export default new UserControllers();
