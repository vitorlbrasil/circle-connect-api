import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/user.interfaces";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import AppError from "../../errors/AppError";

const createSessionService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email,
  });

  if (!user || !user.isActive) {
    throw new AppError("Invalid e-mail or password!", 400);
  }

  const passwordMatches = await compare(password, user.password);

  if (!passwordMatches) {
    throw new AppError("Invalid e-mail or password!", 400);
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return token;
};

export default createSessionService;
