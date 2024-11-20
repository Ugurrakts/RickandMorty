type Character = {
  id: number;
  name: string;
  image: string;
  episode: string[];
};

type CharacterActions = {
  removeCharacter: (id: number) => void;
  toggleCharacterCheck: (character: Character) => void;
};

type CharacterState = {
  selectedCharacters: Character[];
};

type CharacterStore = CharacterState & CharacterActions;
