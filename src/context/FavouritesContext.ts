import { createContext } from "react";

interface FavouritesContextValue {
  isFavourite: (id: number) => boolean;
  toggleFavourite: (id: number) => void;
}

export const FavouritesContext = createContext<FavouritesContextValue>({
  isFavourite: () => false,
  toggleFavourite: () => {}
});
