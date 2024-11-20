import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface SelectedCharacterItemProps {
  character: Character;
  isOpen: boolean;
  removeCharacter: (id: number) => void;
  truncateText: (text: string, length: number) => string;
}

const SelectedCharacterItem: React.FC<SelectedCharacterItemProps> = ({
  character,
  isOpen,
  removeCharacter,
  truncateText,
}) => (
  <View
    key={character.id}
    className="bg-[#E2E8F0] rounded-lg border border-gray-200 p-1 flex-row items-center"
  >
    <Text className="text-sm">
      {isOpen
        ? truncateText(character.name, 15)
        : truncateText(character.name, 9)}
    </Text>
    <TouchableOpacity
      onPress={() => removeCharacter(character.id)}
      className="bg-[#94A3B8] rounded-lg p-1 ml-2"
    >
      <MaterialIcons name="clear" size={17} color="white" />
    </TouchableOpacity>
  </View>
);

export default SelectedCharacterItem;
