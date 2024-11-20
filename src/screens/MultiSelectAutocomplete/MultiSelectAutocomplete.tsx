import React, { useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
} from "react-native";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useMultiSelectAutocomplete } from "./hooks/useMultiSelectAutocomplete";
import SelectedCharacterItem from "./components/SelectedCharacterItem";
import { Character } from "./types";
import { useHighlightQuery } from "./hooks/useHighlightQuery";
import CharacterListItem from "./components/CharacterListItem";
import { MaterialIcons } from "@expo/vector-icons";
const MultiSelectAutocomplete: React.FC = () => {
  const {
    query,
    setQuery,
    isOpen,
    toggleOpen,
    transformedData,
    isLoading,
    error,
    isSelected,
    charactersToShow,
    removeCharacter,
    toggleCharacterCheck,
    truncateText,
  } = useMultiSelectAutocomplete();

  const { highlightText } = useHighlightQuery();

  const hasCharactersToShow = charactersToShow.length > 0;

  const renderItem: ListRenderItem<Character> = useCallback(
    ({ item }) => (
      <CharacterListItem
        item={item}
        isSelected={isSelected}
        toggleCharacterCheck={toggleCharacterCheck}
        highlightText={highlightText}
        query={query}
      />
    ),
    [highlightText, isSelected, toggleCharacterCheck, query]
  );

  return (
    <View
      style={{ paddingTop: Platform.OS === "android" ? 0 : 0 }}
      className="flex-1"
    >
      <TouchableOpacity className="relative pt-3 m-2">
        <View className="border border-[#94A3B8] rounded-2xl p-2">
          <View className="flex flex-row items-start justify-between">
            <View className="flex-1">
              <View className="flex flex-row flex-wrap gap-2 mb-2">
                {hasCharactersToShow &&
                  charactersToShow.map((character) => (
                    <SelectedCharacterItem
                      key={character.id}
                      character={character}
                      isOpen={isOpen}
                      removeCharacter={removeCharacter}
                      truncateText={truncateText}
                    />
                  ))}
              </View>
              <View className="flex flex-row items-center">
                <View className="flex-1">
                  <SearchInput
                    value={query}
                    onChangeText={setQuery}
                    placeholder="Search"
                    inputStyle={`border-2 border-white w-full h-auto min-h-[15px] pl-2.5 rounded-3xl font-bold overflow-hidden ${
                      isOpen ? "mb-2.5 pt-2" : "pt-0.5"
                    }`}
                  />
                </View>
                <TouchableOpacity
                  onPress={toggleOpen}
                  style={{
                    position: "absolute",
                    right: 5,
                    top: "50%",
                    transform: [{ translateY: -15 }],
                  }}
                >
                  <MaterialIcons
                    name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                    size={30}
                    color="#475569"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {query ? (
        <View
          className="border border-[#94A3B8] m-2 rounded-2xl bg-[#F8FAFC] mt-1"
          style={{ height: 650 }}
        >
          {isLoading ? (
            <View className="flex-1 justify-center items-center">
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : error ? (
            <Text className="p-4 text-red-500">Error: {error.message}</Text>
          ) : null}
          <FlatList
            data={transformedData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ flexGrow: 1 }}
            maintainVisibleContentPosition={{
              minIndexForVisible: 20,
              autoscrollToTopThreshold: 5,
            }}
            initialScrollIndex={0}
            horizontal={false}
          />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default MultiSelectAutocomplete;
