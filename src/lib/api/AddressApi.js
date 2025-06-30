import { API_URL } from "./UserApi";

export const createAddress = async (
  token,
  contactId,
  { street, city, province, country, postal_code }
) => {
  return await fetch(`${API_URL}/contacts/${contactId}/addresses`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      street,
      city,
      province,
      country,
      postal_code,
    }),
  });
};

export const getAddresses = async (token, contactId) => {
  return await fetch(`${API_URL}/contacts/${contactId}/addresses`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
  });
};

export const updateAddress = async (
  token,
  contactId,
  addressId,
  { street, city, province, country, postal_code }
) => {
  return await fetch(`${API_URL}/contacts/${contactId}/addresses/${addressId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      city,
      street,
      province,
      country,
      postal_code,
    }),
  });
};

export const getAddress = async (token, contactId, addressId) => {
  return await fetch(`${API_URL}/contacts/${contactId}/addresses/${addressId}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
  });
};

export const deleteAddress = async (token, contactId, addressId) => {
  return await fetch(`${API_URL}/contacts/${contactId}/addresses/${addressId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
  });
};
