import { useEffect, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function Home() {
  const [text, onChangeText] = useState("");
  const [colorMode, setColorMode] = useState("#ff4433");

  useEffect(() => {
    setColorMode(text);
  });

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="type here"
        />
      </View>
      <View style={{ backgroundColor: colorMode, flex: 1 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    backgroundColor: "#3344ff",
    flex: 1,
  },
  bottom: {
    backgroundColor: "#ff4433",
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 40,
    textAlign: "center",
  },
});
