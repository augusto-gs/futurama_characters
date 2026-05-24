import type { Character } from "../types/characters";

const BASE_URL = "https://api.sampleapis.com/futurama/";

export async function fetchCharacters(): Promise<Character[]> {
  const res = await fetch(`${BASE_URL}/characters`);
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  return res.json();
}

export async function fetchCharacterById(id: number): Promise<Character> {
  const res = await fetch(`${BASE_URL}/characters/${id}`);
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  return res.json();
}
