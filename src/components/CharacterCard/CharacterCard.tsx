import { useContext } from "react";
import { Link } from "react-router-dom";
import type { Character } from "../../types/characters";
import { FavouriteButton } from "../FavouriteButton/FavouriteButton";
import { FavouritesContext } from "../../context/FavouritesContext";
import styles from "./CharacterCard.module.scss";

interface CharacterCardProps {
  character: Character;
  isSelected?: boolean;
}

export function CharacterCard({
  character,
  isSelected = false
}: CharacterCardProps) {
  const { isFavourite } = useContext(FavouritesContext);
  const { id, name, images, age, gender, species, occupation } = character;
  const fullName = `${name.first} ${name.last}`;

  return (
    <Link
      to={`/characters/${id}`}
      className={`${styles.card} ${isSelected ? styles["card--selected"] : ""}`}
    >
      <img src={images.main} alt={fullName} className={styles.card__image} />
      <div className={styles.card__info}>
        <p className={styles.card__name}>{fullName}</p>
        <p className={styles.card__meta}>
          {[age, gender, species].filter(Boolean).join(" · ")}
        </p>
        {occupation && <p className={styles.card__occupation}>{occupation}</p>}
      </div>
      <FavouriteButton isFavourite={isFavourite(id)} />
    </Link>
  );
}
