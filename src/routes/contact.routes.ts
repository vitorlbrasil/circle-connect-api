import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactsController,
  retriveContactController,
  updateContactController,
} from "../controllers/contact.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensurePermissionMiddleware from "../middlewares/ensurePermission.middleware";

const contactRoutes = Router();

contactRoutes.post(
  "/user/:userId/contact",
  ensureAuthMiddleware,
  ensurePermissionMiddleware,
  createContactController
);

contactRoutes.get(
  "/user/:userId/contact/:contactId",
  ensureAuthMiddleware,
  ensurePermissionMiddleware,
  retriveContactController
);

contactRoutes.get(
  "/user/:userId/contact",
  ensureAuthMiddleware,
  ensurePermissionMiddleware,
  listContactsController
);

contactRoutes.patch(
  "/user/:userId/contact/:contactId",
  ensureAuthMiddleware,
  ensurePermissionMiddleware,
  updateContactController
);

contactRoutes.delete(
  "/user/:userId/contact/:contactId",
  ensureAuthMiddleware,
  ensurePermissionMiddleware,
  deleteContactController
);

export default contactRoutes;
