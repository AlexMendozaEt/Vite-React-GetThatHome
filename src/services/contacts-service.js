import apiFetch from "./api-fetch";

export async function getMyContacts() {
  return await apiFetch("/contacts");
}

export async function createContact({ property_id, user_id }) {
  return await apiFetch("/contacts", { property_id, user_id });
}

export async function deleteContact(id) {
  return await apiFetch(`/contacts/${id}`, { method: "DELETE" });
}
