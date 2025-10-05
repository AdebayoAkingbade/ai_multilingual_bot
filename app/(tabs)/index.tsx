import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.view}>
      <Text>This is the home page</Text>
      {/* <Link href="/login" style={styles.login}>
        {" "}
        Login Page
      </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    backgroundColor: "blue",
    borderColor: "blue",
    textAlign: "center",
    width: 100,
    height: 20,
    color: "white",
  },
});
