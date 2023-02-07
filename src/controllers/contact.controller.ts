import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import {
  ICreateContact,
  IUpdateContact,
} from "../interfaces/contact.interfaces";
import createContactService from "../services/contact/createContact.service";
import deleteContactService from "../services/contact/deleteContact.service";
import listContactsService from "../services/contact/listContacts.service";
import retrieveContactService from "../services/contact/retrieveContact.service";
import updateContactService from "../services/contact/updateContact.service";

const createContactController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const data: ICreateContact = req.body;
  const newContact = await createContactService(data, userId);
  return res.status(201).json(instanceToPlain(newContact));
};

const retriveContactController = async (req: Request, res: Response) => {
  const { userId, contactId } = req.params;
  const contact = await retrieveContactService(userId, contactId);
  return res.status(200).json(instanceToPlain(contact));
};

const listContactsController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const contacts = await listContactsService(userId);
  return res.status(200).json(instanceToPlain(contacts));
};

const updateContactController = async (req: Request, res: Response) => {
  const { userId, contactId } = req.params;
  const data: IUpdateContact = req.body;
  const updatedContact = await updateContactService(userId, contactId, data);
  return res.status(200).json(instanceToPlain(updatedContact));
};

const deleteContactController = async (req: Request, res: Response) => {
  const { userId, contactId } = req.params;
  await deleteContactService(userId, contactId);
  return res.status(204).send();
};

export {
  createContactController,
  retriveContactController,
  listContactsController,
  updateContactController,
  deleteContactController,
};
