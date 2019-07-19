import { Router } from "express";
import ProjectController from "./controllers/ProjectController";

const routes = new Router();

routes.post("/projects", ProjectController.store);
routes.get("/projects", ProjectController.show);
routes.put("/projects/:id", ProjectController.update);
routes.delete("/projects/:id", ProjectController.delete);
routes.post("/projects/:id/tasks", ProjectController.newTask);

export default routes;
