import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [meal, setMeal] = useState("");
  const [message, setMessage] = useState("");

  const handlePress = () => {
    setMessage(`You ate: ${meal}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍎 My Calorie Tracker</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your meal..."
        value={meal}
        onChangeText={setMeal}
      />
      <Button title="Add" onPress={handlePress} />
      {message ? <Text style={styles.output}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  output: {
    fontSize: 18,
    marginTop: 20,
  },
});
