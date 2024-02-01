export interface IUser {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
}

export interface InitialUserStateProps {
  user: IUser | null;
}

export interface UserProps {
  user: IUser | null;
  logout: () => void;
}
