import { Router } from "express";
import categoryController from "./category.controller.js";

const categoryRoutes = Router();

categoryRoutes.post("/", categoryController.create);
categoryRoutes.get("/", categoryController.get);
/*
    Parametro de Rota vs Query Params
    Rota -> Fazer parte da URL e identificar um recurso. get /categoria/1234 
    Query -> São usados para filtros e consultas opcionais get /categoria?produto=teste
*/
categoryRoutes.put("/:id", categoryController.update);

export default categoryRoutes;