import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Square({ on, colors }) {
  const [mode, setMode] = useState(on);
  const view = {
    top: {
      backgroundColor: colors[0],
      flex: 1,
    },
    bottom: {
      backgroundColor: colors[1],
      flex: 1,
    },
  };

  function switchColor() {
    setMode(!mode);
  }
  return (
    <TouchableOpacity
      onPress={switchColor}
      style={styles.view}
      activeOpacity={1}
    >
      <View style={mode ? view.top : view.bottom}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
  },
});
