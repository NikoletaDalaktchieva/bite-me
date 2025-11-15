import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import FoodMetaForm from "../components/FoodMetaForm";

const HomeScreen = () => {
  const handleFoodSubmit = (data: any) => {
    console.log("food saved:", data);
    // TODO: save to state / backend / store
  };

  return (
    <View style={styles.container}>
      {/* <Logo /> */}
      <Text style={styles.description}>Add a food</Text>
      <FoodMetaForm onSubmit={handleFoodSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF7F0",
  },
  description: {
    fontSize: 18,
    marginVertical: 12,
    textAlign: "center",
  },
});

export default HomeScreen;