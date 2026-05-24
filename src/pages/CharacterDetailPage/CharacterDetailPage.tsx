import { useParams, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useFetch } from "../../hooks/useFetch";
import { fetchCharacterById } from "../../api/characters";
import styles from "./CharacterDetailPage.module.scss";
import { ChevronLeft } from "lucide-react";

export function CharacterDetailPage() {
  const { id } = useParams();
  const numericId = Number(id);
  const navigate = useNavigate();

  const fetcher = useCallback(() => fetchCharacterById(numericId), [numericId]);
  const { data: character, loading, error } = useFetch(fetcher);

  if (!id || isNaN(numericId)) return <p>Invalid character ID.</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;
  if (!character) return <p>Character not found.</p>;

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
