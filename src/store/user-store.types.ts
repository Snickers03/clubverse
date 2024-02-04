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
  register: (name: string, email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
}
