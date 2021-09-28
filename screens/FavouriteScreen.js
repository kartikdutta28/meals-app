import React from "react";
import { Text, View } from "react-native";

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
