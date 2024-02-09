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

      createUser: async (clerkId: string) => {
        // TODO
      },
    }),
    { name: "user-store" },
  ),
);
