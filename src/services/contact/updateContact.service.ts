import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IUpdateContact } from "../../interfaces/contact.interfaces";
import retrieveContactService from "./retrieveContact.service";

const updateContactService = async (
  userId: string,
  contactId: string,
  { fullName, email, phone }: IUpdateContact
): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await retrieveContactService(userId, contactId);

  await contactRepository.update(
    { id: contactId },
    {
      fullName: fullName ? fullName : contact.fullName,
      email: email ? email : contact.email,
      phone: phone ? phone : contact.phone,
    }
  );

  const updatedContact = await contactRepository.findOneBy({
    id: contactId,
  });

  return updatedContact!;
};

export default updateContactService;
