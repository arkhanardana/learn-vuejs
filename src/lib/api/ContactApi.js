import { API_URL } from "./UserApi";

export const getContacts = async (token, { name, email, phone, page }) => {
  const url = new URL(`${API_URL}/contacts`);
  if (name) url.searchParams.append("name", name);
  if (email) url.searchParams.append("email", email);
  if (phone) url.searchParams.append("phone", phone);
  if (page) url.searchParams.append("page", page);

  return await fetch(url, {
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

export const deleteContact = async (token, id) => {
  return await fetch(`${API_URL}/contacts/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: token,
    },
  });
};

export const contactEdit = async (token, id, { first_name, last_name, email, phone }) => {
  return await fetch(`${API_URL}/contacts/${id}`, {
    method: "PUT",
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
