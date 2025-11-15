import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bite Me</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#EAF4FF",
    },
  title: {
    fontSize: 28,
    fontWeight: "bold"
  },
});

export default Header;