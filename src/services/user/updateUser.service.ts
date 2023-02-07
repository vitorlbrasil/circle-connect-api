import { hashSync } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { IUpdateUser } from "../../interfaces/user.interfaces";

const updateUserService = async (
  { fullName, password, phone }: IUpdateUser,
  id: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const found = await userRepository.findOneBy({
    id,
  });

  if (!found || !found.isActive) {
    throw new AppError("User not found!", 404);
  }

  await userRepository.update(id, {
    fullName: fullName ? fullName : found.fullName,
    password: password ? hashSync(password, 10) : found.password,
    phone: phone ? phone : found.phone,
  });

  const user = await userRepository.findOneBy({
    id,
  });

  return user!;
};

export default updateUserService;
