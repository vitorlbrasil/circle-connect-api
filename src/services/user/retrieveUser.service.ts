import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";

const retrieveUserService = async (userId: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const found = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      contacts: true,
    },
  });

  if (!found || !found.isActive) {
    throw new AppError("User not found!", 404);
  }

  return found;
};

export default retrieveUserService;
