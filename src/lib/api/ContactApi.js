import { API_URL } from "./UserApi";

export const getContacts = async (token) => {
  return await fetch(`${API_URL}/contacts`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
  });
};

export const getContact = async (token, id) => {
  return await fetch(`${API_URL}/contacts/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
  });
};

export const createContact = async (token, { first_name, last_name, email, phone }) => {
  return await fetch(`${API_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      phone,
    }),
  });
};
