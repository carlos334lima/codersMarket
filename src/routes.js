//@libraries
import { Router } from "express";

//@controllers
import UsersControllers from "./app/controllers/UsersControllers";
import ProductsControllers from "./app/controllers/ProductsControllers";
import { route } from "express/lib/application";
import logger from "./app/middlewares/logger";
import auth from "./app/middlewares/auth";

const routes = new Router();

routes.use(logger);

routes.post("/users", UsersControllers.index);
routes.post("/signin", UsersControllers.signIn);
routes.post("/login", UsersControllers.login); 

routes.use(auth);

routes.get("/products", ProductsControllers.index);
routes.get("/products/:id", ProductsControllers.find);
routes.post("/products", ProductsControllers.create);
routes.put("/:id", ProductsControllers.update);
routes.delete("/:id", ProductsControllers.delete);

routes.get("/users", UsersControllers.index);

export default routes;
