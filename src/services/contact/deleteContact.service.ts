import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import retrieveContactService from "./retrieveContact.service";

const deleteContactService = async (
  userId: string,
  contactId: string
): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  await retrieveContactService(userId, contactId);

  await contactRepository.update(
    { id: contactId },
    {
      isActive: false,
    }
  );
};

export default deleteContactService;
