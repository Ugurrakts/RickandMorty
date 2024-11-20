import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Character } from "../types";
import { MaterialIcons } from "@expo/vector-icons";

interface CharacterListItemProps {
  item: Character;
  isSelected: (character: Character) => boolean;
  toggleCharacterCheck: (character: Character) => void;
  highlightText: (text: string, query: string) => React.ReactNode;
  query: string;
}

const CharacterListItem: React.FC<CharacterListItemProps> = ({
  item,
  isSelected,
  toggleCharacterCheck,
  highlightText,
  query,
}) => {
  return (
    <TouchableOpacity className="p-2 border-b border-[#94A3B8] ">
      <View className="flex flex-row items-center pr-10">
        <TouchableOpacity
          onPress={() => toggleCharacterCheck(item)}
          className={`border ${
            isSelected(item) ? "bg-[#0075FF]" : "bg-white"
          } border-gray-500 border-1 rounded-[3px] w-[16px] h-[16px] flex justify-center items-center`}
        >
          {isSelected(item) ? (
            <MaterialIcons name="check" size={12} color="white" />
          ) : null}
        </TouchableOpacity>
        <Image
          source={{ uri: item.image }}
          contentFit="cover"
          transition={1000}
          onError={(error) => console.log("Hata:", error)}
          style={{
            height: 48,
            width: 48,
            borderRadius: 6,
            marginLeft: 10,
          }}
        />
        <View className="ml-4">
          <Text>{highlightText(item.name, query)}</Text>
          <Text>{item.episode.length} episodes</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterListItem;
