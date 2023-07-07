export const LANG = Object.freeze({
  EN: "en-US",
  FR: "fr-FR"
} as const);

export const HTTP_REQUEST_HEADERS = Object.freeze({
  "Content-Type": "application/json",
  Accept: "application/json",
  "x-api-key-votappi": import.meta.env.VITE_API_KEY
} as const);
