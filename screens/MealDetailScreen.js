import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const MealDetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Meal Details Screen</Text>
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
