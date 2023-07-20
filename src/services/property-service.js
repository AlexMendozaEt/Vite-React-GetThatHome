import apiFetch from "./api-fetch";

export async function getProperties() {
  return await apiFetch("/properties");
}
