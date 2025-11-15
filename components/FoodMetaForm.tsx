import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

type FoodMeta = {
  name: string;
  serving: string;
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
};

const FoodMetaForm = ({ onSubmit }: { onSubmit?: (data: FoodMeta) => void }) => {
  const [form, setForm] = useState<FoodMeta>({
    name: "",
    serving: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });

  // refs to chain focus
  const servingRef = useRef<TextInput | null>(null);
  const caloriesRef = useRef<TextInput | null>(null);
  const proteinRef = useRef<TextInput | null>(null);
  const carbsRef = useRef<TextInput | null>(null);
  const fatRef = useRef<TextInput | null>(null);

  const handleChange = (key: keyof FoodMeta, value: string) =>
    setForm((s) => ({ ...s, [key]: value }));

  const handleSubmit = () => {
    if (!form.name.trim()) {
      Alert.alert("Validation", "Please enter a food name.");
      return;
    }
    if (!form.calories.trim() || isNaN(Number(form.calories))) {
      Alert.alert("Validation", "Please enter valid calories (number).");
      return;
    }
    onSubmit?.(form);
    Alert.alert("Saved", `${form.name} (${form.calories} kcal) saved.`);
    setForm({
      name: "",
      serving: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.wrapper}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.label}>Food name</Text>
        <TextInput
          style={styles.input}
          value={form.name}
          onChangeText={(t) => handleChange("name", t)}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => servingRef.current?.focus()}
        />

        <Text style={[styles.label, {paddingTop: 8}]}>Serving</Text>
        <TextInput
          ref={servingRef}
          style={styles.input}
          value={form.serving}
          onChangeText={(t) => handleChange("serving", t)}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => caloriesRef.current?.focus()}
        />

        {/* 2x2 grid: Calories | Carbs  then Protein | Fat */}
        <View style={[styles.gridRow, {paddingTop: 8}]}>
          <View style={[styles.col, styles.colLeft]}>
            <Text style={styles.label}>Calories (kcal)</Text>
            <TextInput
              ref={caloriesRef}
              style={styles.input}
              value={form.calories}
              onChangeText={(t) => handleChange("calories", t)}
              placeholder="0"
              keyboardType="numeric"
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => proteinRef.current?.focus()}
            />
          </View>

          <View style={[styles.col, styles.colRight]}>
            <Text style={styles.label}>Carbs (g)</Text>
            <TextInput
              ref={carbsRef}
              style={styles.input}
              value={form.carbs}
              onChangeText={(t) => handleChange("carbs", t)}
              placeholder="0"
              keyboardType="numeric"
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => fatRef.current?.focus()}
            />
          </View>
        </View>

        <View style={styles.gridRow}>
          <View style={[styles.col, styles.colLeft]}>
            <Text style={styles.label}>Protein (g)</Text>
            <TextInput
              ref={proteinRef}
              style={styles.input}
              value={form.protein}
              onChangeText={(t) => handleChange("protein", t)}
              placeholder="0"
              keyboardType="numeric"
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => carbsRef.current?.focus()}
            />
          </View>

          <View style={[styles.col, styles.colRight]}>
            <Text style={styles.label}>Fat (g)</Text>
            <TextInput
              ref={fatRef}
              style={styles.input}
              value={form.fat}
              onChangeText={(t) => handleChange("fat", t)}
              placeholder="0"
              keyboardType="numeric"
              returnKeyType="done"
              onSubmitEditing={handleSubmit}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: { width: "100%" },
  container: {
    padding: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: "#333",
  },

  /* grid */
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  col: {
    flex: 1,
  },
  colLeft: {
    marginRight: 8,
  },
  colRight: {
    marginLeft: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 0,
    backgroundColor: "#FFF",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  rowInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 12,
  },
  smallInput: {
    flex: 1,
    marginRight: 4,
  },
  button: {
    backgroundColor: "#FF9500",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default FoodMetaForm;