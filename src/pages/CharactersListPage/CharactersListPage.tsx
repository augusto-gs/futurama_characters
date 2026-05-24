import { Outlet, useParams } from "react-router-dom";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { useFetch } from "../../hooks/useFetch";
import { fetchCharacters } from "../../api/characters";
import styles from "./CharactersListPage.module.scss";

export function CharactersListPage() {
  const { id } = useParams();
  const isDetailOpen = Boolean(id);

  const { data: characters, loading, error } = useFetch(fetchCharacters);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;
  if (!characters || characters.length === 0)
    return <p>No characters found.</p>;

  return (
    <div
      className={`${styles.layout} ${isDetailOpen ? styles["layout--detail-open"] : ""}`}
    >
      <aside className={styles.layout__list}>
        <h1>Characters List</h1>
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <CharacterCard
                key={character.id}
                character={character}
                isSelected={String(character.id) === id}
              />
            </li>
          ))}
        </ul>
      </aside>
      <main className={styles.layout__detail}>
        <Outlet />
      </main>
    </div>
  );
}
