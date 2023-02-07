import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import retrieveUserService from "../user/retrieveUser.service";

const listContactsService = async (userId: string): Promise<Contact[]> => {
  const user = await retrieveUserService(userId);

  return user.contacts;
};

export default listContactsService;
