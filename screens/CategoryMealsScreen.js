import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Category meals screen</Text>
      <Button
        title="Go to Meal Details"
        onPress={() => props.navigation.navigate("MealDetailScreen")}
      />
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
