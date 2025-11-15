import React from "react";
import { Image, StyleSheet } from "react-native";

const TangerineLogo = () => {
  return (
    <Image
      source={require("../assets/logo.svg")}
      style={styles.logo}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});

export default TangerineLogo;