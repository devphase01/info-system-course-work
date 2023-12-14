import { RoleType } from "..";

export interface ICreateUser {
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ICredentials {
  userId: string;
  email: string;
  role: RoleType;
}