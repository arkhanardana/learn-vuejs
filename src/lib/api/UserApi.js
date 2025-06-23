export const API_URL = import.meta.env.VITE_API_PATH;

export const userRegister = async ({ username, password, name }) => {
  return await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      password,
      username,
    }),
  });
};

export const userLogin = async ({ username, password }) => {
  return await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};
