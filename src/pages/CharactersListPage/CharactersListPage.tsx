import { useContext, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { fetchCharacters } from "../../api/characters";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { StatusMessage } from "../../components/StatusMessage/StatusMessage";
import { FavouritesContext } from "../../context/FavouritesContext";
import styles from "./CharactersListPage.module.scss";

type CharacterFilter = "all" | "favourites";

export function CharactersListPage() {
  const { id } = useParams();
  const isDetailOpen = Boolean(id);
  const { isFavourite } = useContext(FavouritesContext);
  const [activeFilter, setActiveFilter] = useState<CharacterFilter>("all");

  const { data: characters, loading, error } = useFetch(fetchCharacters);

  if (loading) return <StatusMessage variant="loading" />;
  if (error) return <StatusMessage variant="error" />;
  if (!characters || characters.length === 0)
    return <StatusMessage variant="empty" title="No characters found" />;

  const visibleCharacters = {
    all: characters,
    favourites: characters.filter((c) => isFavourite(c.id))
  }[activeFilter];

  return (
    <div
      className={`${styles.layout} ${isDetailOpen ? styles["layout--detail-open"] : ""}`}
    >
      <aside className={styles.layout__list}>
        <div className={styles.layout__listHeader}>
          <h1>Characters List</h1>
          <div className={styles.layout__filters}>
            <button
              className={`${styles.filter} ${activeFilter === "all" ? styles["filter--active"] : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
            <button
              className={`${styles.filter} ${activeFilter === "favourites" ? styles["filter--active"] : ""}`}
              onClick={() => setActiveFilter("favourites")}
            >
              Favourites
            </button>
          </div>
        </div>

        <div className={styles.layout__listContent}>
          {visibleCharacters.length === 0 ? (
            <StatusMessage variant="empty" />
          ) : (
            <ul>
              {visibleCharacters.map((character) => (
                <li key={character.id}>
                  <CharacterCard
                    character={character}
                    isSelected={String(character.id) === id}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
      <main className={styles.layout__detail}>
        <Outlet />
      </main>
    </div>
  );
}
