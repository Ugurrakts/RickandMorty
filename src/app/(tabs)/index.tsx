import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import MultiSelectAutocomplete from "@/src/screens/MultiSelectAutocomplete/MultiSelectAutocomplete";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../../../global.css";

const queryClient = new QueryClient();
const TabOneScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <View className="flex-1 bg-white">
            <MultiSelectAutocomplete />
          </View>
        </SafeAreaProvider>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

export default TabOneScreen;
