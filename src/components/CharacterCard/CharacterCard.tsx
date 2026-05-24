import { Link } from "react-router-dom";
import type { Character } from "../../types/characters";
import styles from "./CharacterCard.module.scss";

interface CharacterCardProps {
  character: Character;
  isSelected?: boolean;
  isFavourite?: boolean;
}

export function CharacterCard({
  character,
  isSelected = false,
  isFavourite = false
}: CharacterCardProps) {
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
      {isFavourite && (
        <span className={styles.card__favourite} aria-label="Favourite">
          ♥
        </span>
      )}
    </Link>
  );
}
