import { useCallback, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useFetch } from "../../hooks/useFetch";
import { fetchCharacterById } from "../../api/characters";
import { FavouriteButton } from "../../components/FavouriteButton/FavouriteButton";
import { StatusMessage } from "../../components/StatusMessage/StatusMessage";
import { FavouritesContext } from "../../context/FavouritesContext";
import styles from "./CharacterDetailPage.module.scss";

export function CharacterDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = Number(id);
  const { isFavourite, toggleFavourite } = useContext(FavouritesContext);

  const fetcher = useCallback(() => fetchCharacterById(numericId), [numericId]);

  const { data: character, loading, error } = useFetch(fetcher);

  if (!id || isNaN(numericId))
    return <StatusMessage variant="error" title="Invalid character" />;
  if (loading) return <StatusMessage variant="loading" />;
  if (error) return <StatusMessage variant="error" />;
  if (!character)
    return (
      <StatusMessage
        variant="empty"
        title="Character not found"
        description="The character you're looking for doesn't exist."
      />
    );

  const { name, images, age, gender, species, occupation, sayings } = character;
  const fullName = `${name.first} ${name.last}`;

  return (
    <div className={styles.detail}>
      <button
        className={styles.detail__backButton}
        onClick={() => navigate("/characters")}
      >
        <ChevronLeft size={20} />
        Back
      </button>

      <div className={styles.detail__header}>
        <img
          src={images.main}
          alt={fullName}
          className={styles.detail__image}
        />
        <div className={styles.detail__info}>
          <div className={styles.detail__nameRow}>
            <h2 className={styles.detail__name}>{fullName}</h2>
            <FavouriteButton
              isFavourite={isFavourite(character.id)}
              onClick={() => toggleFavourite(character.id)}
              clickable
            />
          </div>
          <p className={styles.detail__meta}>
            {[age, gender, species].filter(Boolean).join(" · ")}
          </p>
          {occupation && (
            <p className={styles.detail__occupation}>{occupation}</p>
          )}
        </div>
      </div>

      {sayings && sayings.length > 0 && (
        <div className={styles.detail__sayings}>
          <h3 className={styles.detail__sayingsTitle}>Sayings</h3>
          <ul>
            {sayings.map((saying, index) => (
              <li key={index} className={styles.detail__saying}>
                {saying}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
