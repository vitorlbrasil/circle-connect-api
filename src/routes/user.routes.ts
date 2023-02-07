import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  retrieveUserController,
  updateUserController,
} from "../controllers/user.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensurePermissionMiddleware from "../middlewares/ensurePermission.middleware";

const userRoutes = Router();

userRoutes.post("/signup", createUserController);
userRoutes.get(
  "/user/:userId",
  ensureAuthMiddleware,
  ensurePermissionMiddleware,
  retrieveUserController
);
userRoutes.patch(
  "/user/:userId",
  ensureAuthMiddleware,
  ensurePermissionMiddleware,
  updateUserController
);
userRoutes.delete(
  "/user/:userId",
  ensureAuthMiddleware,
  ensurePermissionMiddleware,
  deleteUserController
);

export default userRoutes;
