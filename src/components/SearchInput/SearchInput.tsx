import React from "react";
import { TextInput, View, Platform } from "react-native";
import { SearchInputProps } from "./types";

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder,
  inputStyle,
  containerStyle,
}) => {
  return (
    <View className={containerStyle}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        className={`${inputStyle} ${
          Platform.OS === "android" ? "h-8 py-2" : ""
        }`}
        multiline={false}
        numberOfLines={1}
        style={
          Platform.OS === "android"
            ? {
                lineHeight: 10,
              }
            : undefined
        }
      />
    </View>
  );
};

export default SearchInput;
