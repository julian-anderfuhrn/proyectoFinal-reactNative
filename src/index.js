import { useFonts } from "expo-font";
import { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import * as SQLite from "expo-sqlite";

import { init } from "./db";
import RootNavigator from "./navigations";
import { store } from "./store";
import { FONTS, COLORS } from "./themes";
import { setUser } from "./store/auth/auth.slice";

const db = SQLite.openDatabase("sessions.db");

export default function App() {
  useEffect(() => {
    init()
      .then((result) => {
        console.log("Db initialized/dropped");
        console.log(result);
      })
      .catch((error) => {
        console.log("Initialization DB failed:");
        console.log(error.message);
      });
  }, []);

  const [loaded] = useFonts({
    [FONTS.regular]: require("../assets/fonts/Inter-Regular.ttf"),
    [FONTS.bold]: require("../assets/fonts/Inter-Bold.ttf"),
    [FONTS.medium]: require("../assets/fonts/Inter-Medium.ttf"),
    [FONTS.light]: require("../assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
