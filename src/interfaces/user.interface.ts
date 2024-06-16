import type { IPost } from "@/interfaces/post.interface";

export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  sex: SexValue;
  birth: string;
  posts?: IPost[];
}

export enum SexValue {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
