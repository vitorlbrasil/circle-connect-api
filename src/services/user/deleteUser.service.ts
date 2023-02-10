import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";

const deleteUserService = async (id: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const found = await userRepository.findOneBy({
    id,
  });

  if (!found || !found.isActive) {
    throw new AppError("User not found!", 404);
  }

  await userRepository.update(id, {
    isActive: false,
  });
};

export default deleteUserService;
