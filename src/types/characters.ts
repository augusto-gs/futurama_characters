export interface CharacterName {
  first: string;
  second: string;
  last: string;
}

export interface CharacterImages {
  "head-shot": string;
  main: string;
}

export interface Character {
  id: number;
  name: CharacterName;
  images: CharacterImages;
  gender: string;
  species: string;
  homePlanet?: string;
  occupation: string;
  age?: string;
  sayings?: string[];
}
