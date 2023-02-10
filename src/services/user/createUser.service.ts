import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { ICreateUser } from "../../interfaces/user.interfaces";
import { hashSync } from "bcryptjs";
import AppError from "../../errors/AppError";

const createUserService = async ({
  email,
  fullName,
  password,
  phone,
}: ICreateUser): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();
  const emailAlreadyExists = users.find((user) => user.email === email);
  if (emailAlreadyExists) {
    throw new AppError("E-mail already being used!");
  }

  if (!password) {
    throw new AppError("Missing password!");
  }

  const hashedPassword = hashSync(password, 10);

  const newUser = userRepository.create({
    fullName,
    email,
    password: hashedPassword,
    phone,
  });

  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
