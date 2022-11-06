import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Square from "./Square";

const blue_red = ["#3344ff", "#ff4433"];
const white_black = ["#fff", "#000"];

var squaresArr = [];
for (var i = 0; i < 100; i++) {
  squaresArr.push(i);
}

const squares = squaresArr.map((id) => (
  <Square on={id % 2 == 0} key={id} colors={blue_red} />
));

export default function Home() {
  const [level, setLevel] = useState(1);
  const [tools, showTools] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.showTools}
        onPress={() => showTools(!tools)}
      >
        <Text style={styles.button}>🤖</Text>
      </TouchableOpacity>
      {squares.slice(0, level)}
      {tools ? (
        <View style={styles.tools}>
          <TouchableOpacity
            style={styles.max}
            onPress={() => setLevel(squares.length)}
          >
            <Text style={styles.button}>⚫️</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.more}
            onPress={() => setLevel(level + 1)}
          >
            <Text style={styles.button}>➕</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.less}
            onPress={() => setLevel(level - 1)}
          >
            <Text style={styles.button}>➖</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.min} onPress={() => setLevel(0)}>
            <Text style={styles.button}>⚪️</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    fontSize: 50,
  },
  showTools: {
    position: "absolute",
    alignSelf: "center",
    top: "5%",
    right: "7.5%",
    zIndex: 2,
  },
  max: {
    top: "0%",
  },
  more: {
    top: "5%",
  },
  less: {
    top: "10%",
  },
  min: {
    top: "15%",
  },

  tools: {
    position: "absolute",
    alignSelf: "center",
    top: "15%",
    right: "7.5%",
  },
});
