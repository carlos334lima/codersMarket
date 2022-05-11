//@libraries
import { Router } from "express";

//@controllers
import UsersControllers from "./app/controllers/UsersControllers";
import ProductsControllers from "./app/controllers/ProductsControllers";

const routes = new Router();

routes.get("/products", ProductsControllers.index);
routes.get("/products/:id", ProductsControllers.find);
routes.post("/products", ProductsControllers.create);
routes.put("/:id", ProductsControllers.update);
routes.delete("/:id", ProductsControllers.delete);

routes.get("/users", UsersControllers.index);

export default routes;
