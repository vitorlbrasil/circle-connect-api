export interface ICreateUser {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUpdateUser {
  fullName?: string;
  password?: string;
  phone?: string;
}
