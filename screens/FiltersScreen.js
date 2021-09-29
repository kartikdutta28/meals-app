import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const FiltersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Filters screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
