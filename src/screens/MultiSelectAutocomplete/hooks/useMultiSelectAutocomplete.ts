import { useState, useCallback } from "react";
import { useCharacterStore } from "../../../store/useCharacterStore";
import { useRickAndMortyAPI } from "@/src/service/useRickAndMortyAPI";
import { Character } from "../types";

export const useMultiSelectAutocomplete = () => {
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, isLoading, error } = useRickAndMortyAPI(query);

  const transformedData: Character[] =
    data?.map((char) => ({
      ...char,
      isChecked: false,
      description: "",
    })) || [];

  const { selectedCharacters, removeCharacter, toggleCharacterCheck } =
    useCharacterStore();

  const isSelected = useCallback(
    (character: Character): boolean => {
      return selectedCharacters.some((c) => c.id === character.id);
    },
    [selectedCharacters]
  );

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const charactersToShow = isOpen
    ? selectedCharacters
    : selectedCharacters.slice(0, 2);

  const truncateText = useCallback((text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }, []);

  return {
    query,
    setQuery,
    isOpen,
    toggleOpen,
    transformedData,
    isLoading,
    error,
    isSelected,
    selectedCharacters,
    charactersToShow,
    removeCharacter,
    toggleCharacterCheck,
    truncateText,
  };
};
