export const registerAction = async (
  name: string,
  email: string,
  password: string,
) => {
  const res = await fetch("/api/user/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
};

export const loginAction = async (email: string, password: string) => {
  const res = await fetch("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!data) {
    throw new Error("Passwort oder Email falsch.");
  }

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
};
