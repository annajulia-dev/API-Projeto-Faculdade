import { Router } from "express";
import categoryRoutes from "./modules/category/category.routes.js";

const routes = Router();

routes.get("/teste", (request, response) => {
    return response.status(200).json({
        message: "Endpoint de teste"
    });
});

routes.use("/categories", categoryRoutes);

export default routes;