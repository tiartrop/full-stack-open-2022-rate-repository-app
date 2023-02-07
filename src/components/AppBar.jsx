import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.appBar
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab tab="Repositories" />
    </View>
  );
};

export default AppBar;