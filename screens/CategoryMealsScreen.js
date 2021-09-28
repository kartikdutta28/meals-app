import React from "react";
import { Text, View } from "react-native";

export const CategoryMealsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Category meals screen</Text>
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
