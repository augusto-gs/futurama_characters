import type { ReactNode } from "react";
import { FavouritesContext } from "./FavouritesContext";
import { useFavourites } from "../hooks/useFavourites";

export function FavouritesProvider({ children }: { children: ReactNode }) {
  const { isFavourite, toggleFavourite } = useFavourites();

  return (
    <FavouritesContext.Provider value={{ isFavourite, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}
