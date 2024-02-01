import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { InitialUserStateProps, UserProps } from "./user-store.types";

export const initialUserState: InitialUserStateProps = {
  user: null,
};

export const useUserStore = create<UserProps>()(
  devtools(
    (set, get) => ({
      ...initialUserState,
      register: (name: string, email: string, password: string) => {
        // TODO
      },
      login: (name: string, password: string) => {
        // TODO
      },
      loginWithLocalStorage: (id: string, name: string) => {
        // TODO
      },
      logout: () => {
        // localStorage.removeItem("playerId");
        // localStorage.removeItem("playerName");
        set({
          user: initialUserState.user,
        });
      },
    }),
    { name: "user-store" },
  ),
);
