import { Router } from "express";
import { createSessionController } from "../controllers/sessions.controllers";

const sessionsRoutes = Router();

sessionsRoutes.post("/login", createSessionController);

export default sessionsRoutes;
