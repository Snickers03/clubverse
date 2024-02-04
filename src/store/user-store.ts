import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { loginAction, registerAction } from "@/actions/user.actions";

import { InitialUserStateProps, UserProps } from "./user-store.types";

export const initialUserState: InitialUserStateProps = {
  user: null,
};

export const useUserStore = create<UserProps>()(
  devtools(
    (set, get) => ({
      ...initialUserState,
      register: async (name: string, email: string, password: string) => {
        const user = await registerAction(name, email, password);
        set({
          user,
        });
        return user;
      },
      login: async (name: string, password: string) => {
        const user = await loginAction(name, password);
        set({
          user,
        });
        return user;
      },
      loginWithToken: async (token: string) => {
        // TODO
      },
      logout: () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("userToken");
        set({
          user: initialUserState.user,
        });
      },
    }),
    { name: "user-store" },
  ),
);
