import { useState } from "react";

const STORAGE_KEY = "futurama-favourites";

function getStoredFavourites(): number[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function useFavourites() {
  const [favourites, setFavourites] = useState<number[]>(getStoredFavourites);

  const isFavourite = (id: number): boolean => {
    return favourites.includes(id);
  };

  const toggleFavourite = (id: number): void => {
    setFavourites((previous) => {
      const updated = previous.includes(id)
        ? previous.filter((favouriteId) => favouriteId !== id)
        : [...previous, id];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  return { isFavourite, toggleFavourite };
}
