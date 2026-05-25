import { Heart } from "lucide-react";
import styles from "./FavouriteButton.module.scss";

interface FavouriteButtonProps {
  isFavourite: boolean;
  onClick?: () => void;
  clickable?: boolean;
}

export function FavouriteButton({
  isFavourite,
  onClick,
  clickable = false
}: FavouriteButtonProps) {
  if (!isFavourite && !clickable) return null;

  if (clickable) {
    return (
      <button
        role="switch"
        aria-checked={isFavourite}
        aria-label={
          isFavourite ? "Remove from favourites" : "Add to favourites"
        }
        onClick={onClick}
        className={styles.button}
      >
        <Heart size={20} fill={isFavourite ? "currentColor" : "none"} />
      </button>
    );
  }

  return (
    <span aria-label="Favourite">
      <Heart size={20} fill="currentColor" className={styles.icon} />
    </span>
  );
}
