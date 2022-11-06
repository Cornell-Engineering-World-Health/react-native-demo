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
      <TouchableOpacity style={styles.max} onPress={() => showTools(true)}>
        <Text style={styles.max}>👹</Text>
      </TouchableOpacity>
      {squares.slice(0, level)}
      <TouchableOpacity
        style={styles.max}
        onPress={() => setLevel(squares.length)}
      >
        <Text style={styles.max}>👹</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.more} onPress={() => setLevel(level + 1)}>
        <Text style={styles.more}>➕</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.less} onPress={() => setLevel(level - 1)}>
        <Text style={styles.less}>➖</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.min} onPress={() => setLevel(0)}>
        <Text style={styles.min}>0️⃣</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  more: {
    fontSize: 50,
    top: "45%",
    position: "absolute",
    alignSelf: "center",
  },
  less: {
    fontSize: 50,
    top: "55%",
    position: "absolute",
    alignSelf: "center",
  },
  min: {
    fontSize: 50,
    top: "65%",
    position: "absolute",
    alignSelf: "center",
  },
  max: {
    fontSize: 50,
    top: "35%",
    position: "absolute",
    alignSelf: "center",
  },
});
