export interface ICreateContact {
  fullName: string;
  email?: string;
  phone?: string;
}

export interface IUpdateContact {
  fullName?: string;
  email?: string;
  phone?: string;
}
