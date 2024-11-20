import { create } from "zustand";

export const useCharacterStore = create<CharacterStore>((set) => ({
  selectedCharacters: [],
  toggleCharacterCheck: (character: Character) =>
    set(({ selectedCharacters }) => ({
      selectedCharacters: selectedCharacters.find(
        (c: Character) => c.id === character.id
      )
        ? selectedCharacters.filter((c: Character) => c.id !== character.id)
        : [...selectedCharacters, character],
    })),

  removeCharacter: (id) =>
    set(({ selectedCharacters }) => ({
      selectedCharacters: selectedCharacters.filter((c) => c.id !== id),
    })),
}));
