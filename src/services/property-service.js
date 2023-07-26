import apiFetch from "./api-fetch";
import apiFetchWithImage from "./api-fetch-with-image";

export async function getProperties() {
  return await apiFetch("/properties");
}

export async function getMyProperties() {
  return await apiFetch("/myproperties");
}

export async function getProperty(propertyId) {
  return await apiFetch(`/properties/${propertyId}`);
}

export async function createProperty(propertyData) {
  return await apiFetchWithImage(`/properties`, { body: propertyData });
}

export async function updateProperty(propertyData, propertyId) {
  let dataCleaned = Object.fromEntries(
    Object.entries(propertyData).filter(([, v]) => v !== "")
  );

  return await apiFetch(`/properties/${propertyId}`, {
    method: "PATCH",
    body: dataCleaned,
  });
}

export async function updateRestoreProperty(propertyId) {
  const propertyData = { close: false };

  return await apiFetch(`/properties/${propertyId}`, {
    method: "PATCH",
    body: propertyData,
  });
}

export async function updateCloseProperty(propertyId) {
  const propertyData = { close: true };

  return await apiFetch(`/properties/${propertyId}`, {
    method: "PATCH",
    body: propertyData,
  });
}

export async function deleteProperty(propertyId) {
  return await apiFetch(`/properties/${propertyId}`, { method: "DELETE" });
}
