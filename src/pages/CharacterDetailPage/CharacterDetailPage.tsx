import { useParams } from "react-router-dom";
import type { Character } from "../../types/characters";
import styles from "./CharacterDetailPage.module.scss";

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
    sayings: [
      "Bender, this is Fry's decision... and he made it wrong. So it's time for us to interfere in his life.",
      "With my Oxo Goodgrips cheese knife, I stab at thee!",
      "I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness.",
      "I was having the most wonderful dream. Except you were there, and you were there, and you were there!"
    ]
  }
];

export function CharacterDetailPage() {
  const { id } = useParams();
  const character = mockCharacters.find((character) => String(character.id) === id);

  if (!character) return <p>Character not found</p>;

  const { name, images, age, gender, species, occupation, sayings } = character;
  const fullName = `${name.first} ${name.last}`;

  return (
    <div className={styles.detail}>
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
