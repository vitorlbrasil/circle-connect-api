import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { ICreateUser, IUpdateUser } from "../interfaces/user.interfaces";
import createUserService from "../services/user/createUser.service";
import retrieveUserService from "../services/user/retrieveUser.service";
import updateUserService from "../services/user/updateUser.service";
import deleteUserService from "../services/user/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser: ICreateUser = req.body;
  const createdUser = await createUserService(newUser);
  return res.status(201).json(instanceToPlain(createdUser));
};

const retrieveUserController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = await retrieveUserService(userId);
  return res.status(200).json(instanceToPlain(user));
};

const updateUserController = async (req: Request, res: Response) => {
  const data: IUpdateUser = req.body;
  const { userId } = req.params;
  const updatedUser = await updateUserService(data, userId);
  return res.status(200).json(instanceToPlain(updatedUser));
};

const deleteUserController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  await deleteUserService(userId);
  return res.status(204).send();
};

export {
  createUserController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
};
