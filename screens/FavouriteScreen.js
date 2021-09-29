import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const FavouriteScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Favourite sceeen</Text>
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
