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

export const userDetail = async (token) => {
  return await fetch(`${API_URL}/users/current`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: token,
    },
  });
};

export const userUpdateProfile = async (token, { name }) => {
  return await fetch(`${API_URL}/users/current`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      name,
    }),
  });
};

export const userUpdatePassword = async (token, { password }) => {
  return await fetch(`${API_URL}/users/current`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      password,
    }),
  });
};

export const userLogout = async (token) => {
  return await fetch(`${API_URL}/users/logout`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: token,
    },
  });
};
