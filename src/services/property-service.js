import apiFetch from "./api-fetch";

export async function getProperties() {
  return await apiFetch("/properties");
}

export async function getMyProperties() {
  return await apiFetch("/myproperties");
}

export async function getMyFavorites() {
  return await apiFetch("/favorites");
}

export async function getMyContacts() {
  return await apiFetch("/contacts");
}

export async function getProperty(propertyId) {
  return await apiFetch(`/properties/${propertyId}`);
}

export async function createProperty(propertyData) {
  return await apiFetch("/properties", {
    body: propertyData,
  });
}

export async function updateProperty(propertyData, propertyId) {
  let dataCleaned = Object.fromEntries(
    Object.entries(propertyData).filter(([, v]) => v !== "")
  );

  return await apiFetch(`/property/${propertyId}`, {
    method: "PATCH",
    body: dataCleaned,
  });
}

export async function deleteProperty(propertyId) {
  return await apiFetch(`/property/${propertyId}`, { method: "DELETE" });
}
