// Base URL for the Express API (set VITE_API_URL in .env, e.g. http://localhost:5050)
const base = import.meta.env.VITE_API_URL || "http://localhost:5050";

export const API_URL = `${base.replace(/\/$/, "")}/api/auth`;

export const SIGNUP_URL = `${API_URL}/signup`;
export const LOGIN_URL = `${API_URL}/login`;

/** Parse JSON bodies; handles empty or non-JSON (e.g. wrong port / proxy HTML). */
export async function readApiJson(response) {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { message: text.slice(0, 200) };
  }
}
