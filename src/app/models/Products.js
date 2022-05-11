const MOCK_PRODUCTS = [
  {
    name: "Feijão 1k Y",
    price: 10.7,
    id: 10,
  },
  {
    name: "Achocolatado",
    price: 5.1,
    id: 20,
  },
  {
    name: "Bolacha",
    price: 3.7,
    id: Math.floor(Date.now() * Math.random()),
  },
];

class Products {
  async findAll() {
    return MOCK_PRODUCTS;
  }

  async findByPk(id) {
    const result = MOCK_PRODUCTS.find((item) => {
      if (item.id == id) {
        return item;
      }
    });

    return result;
  }

  async create(product) {
   

    const productFormatted = {
      ...product,
      id: Math.floor(Date.now() * Math.random()),
    };

    MOCK_PRODUCTS.push(productFormatted);

    return productFormatted;
  }

  async update() {}

  async destroy() {}
}

export default new Products();
