import { Outlet, useParams } from "react-router-dom";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import type { Character } from "../../types/characters";
import styles from "./CharactersListPage.module.scss";

export function CharactersListPage() {
  const { id } = useParams();
  const isDetailOpen = Boolean(id);

  const mockCharacters: Character[] = [
    {
      id: 1,
      name: { first: "Philip", middle: "Jay", last: "Fry" },
      images: {
        "head-shot": "",
        main: "https://upload.wikimedia.org/wikipedia/en/2/28/Philip_Fry.png"
      },
      gender: "Male",
      species: "Human",
      homePlanet: "Earth",
      occupation: "Intergalactic Delivery Boy",
      age: "25",
      sayings: ["Shut up and take my money!"]
    },
    {
      id: 2,
      name: { first: "Turanga", middle: "", last: "Leela" },
      images: {
        "head-shot": "",
        main: "https://upload.wikimedia.org/wikipedia/en/d/d4/Turanga_Leela.png"
      },
      gender: "Female",
      species: "Mutant",
      homePlanet: "Earth",
      occupation: "Captain and pilot",
      sayings: []
    }
  ];

  return (
    <div
      className={`${styles.layout} ${isDetailOpen ? styles["layout--detail-open"] : ""}`}
    >
      <aside className={styles.layout__list}>
        <h1>Characters List</h1>
        <ul>
          {mockCharacters.map((character) => (
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
