import { UserResource } from "@clerk/types";
import { User } from "@prisma/client";

export const createUserAction = async (
  clerkUser: UserResource,
): Promise<User> => {
  const res = await fetch("/api/user/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      clerkId: clerkUser.id,
      firstName: clerkUser.firstName,
      lastName: clerkUser.lastName,
      email: clerkUser.emailAddresses[0].emailAddress,
    }),
  });

  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
};
