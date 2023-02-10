import "reflect-metadata";
import "express-async-errors";
import express from "express";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import userRoutes from "./routes/user.routes";
import sessionsRoutes from "./routes/sessions.routes";
import contactRoutes from "./routes/contact.routes";

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(sessionsRoutes);
app.use(contactRoutes);

app.use(handleErrorMiddleware);

export default app;
