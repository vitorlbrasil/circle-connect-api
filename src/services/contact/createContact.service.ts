import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { ICreateContact } from "../../interfaces/contact.interfaces";

const createContactService = async (
  { fullName, email, phone }: ICreateContact,
  userId: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const newContact = contactRepository.create({
    fullName,
    email,
    phone,
    user: user,
  });

  await contactRepository.save(newContact);

  return newContact;
};

export default createContactService;
