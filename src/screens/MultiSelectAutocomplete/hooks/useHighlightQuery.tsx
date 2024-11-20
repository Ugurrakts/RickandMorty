import { Text } from "react-native";
import React from "react";

export const useHighlightQuery = () => {
  const highlightText = (text: string, query: string) => {
    if (!text || !query) {
      return <Text>{text || ""}</Text>;
    }

    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <Text>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <Text key={index} style={{ fontWeight: "bold" }}>
              {part}
            </Text>
          ) : (
            part
          )
        )}
      </Text>
    );
  };

  return { highlightText };
};
