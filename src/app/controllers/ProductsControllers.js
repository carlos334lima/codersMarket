import Products from "../models/Products";

class ProductsController {
  async index(req, res) {
    const products = await Products.findAll();

    res.status(200).json(products);
  }

  async find(req, res) {
    const { id } = req.params;
    const products = await Products.findByPk(id);

    res.status(200).json(products);
  }

  async create(req, res) {
    const product = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required field" });
    }

    if (product.price <= 0) {
      return res
        .status(400)
        .json({ message: "The price cannot be a negative value." });
    }

    const products = await Products.create(product);

    res.status(201).json(products);
  }

  async update(req, res) {}

  async delete(req, res) {}
}

export default new ProductsController();
