import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";

const retrieveContactService = async (
  userId: string,
  contactId: string
): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });
  if (!user || !user.isActive) {
    throw new AppError("User not found!", 404);
  }

  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!contact || !contact.isActive) {
    throw new AppError("Contact not found!", 404);
  }

  if (contact.user.id != userId) {
    throw new AppError("User does not have permission!", 403);
  }

  return contact;
};

export default retrieveContactService;
