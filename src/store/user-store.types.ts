export interface IUser {
  id: string;
  organisationId?: string;
}

export interface InitialUserStateProps {
  user: IUser | null;
}

export interface UserProps {
  user: IUser | null;

  createUser: (clerId: string) => Promise<any>;
}
