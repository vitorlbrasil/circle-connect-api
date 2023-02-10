import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const ensurePermissionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.isAdm || req.user.id == req.params.userId) {
    return next();
  }

  return res.status(403).json({
    message: "User does not have permission!",
  });
};

export default ensurePermissionMiddleware;
