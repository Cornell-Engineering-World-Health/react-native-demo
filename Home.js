import { StyleSheet, View } from "react-native";
import Square from "./Square";

const blue_red = ["#3344ff", "#ff4433"];
const white_black = ["#fff", "#000"];

export default function Home() {
  return (
    <View style={styles.container}>
      <Square on={true} colors={white_black} />
      <Square colors={blue_red} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
