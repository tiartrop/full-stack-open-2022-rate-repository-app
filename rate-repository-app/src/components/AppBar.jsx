import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.appBar
  },
  flexContainerRowAS: {
    display: "flex",
    flexDirection: "row"
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.flexContainerRowAS}>
        <Link to="/" onClick={(e) => e.preventDefault()}>
          <AppBarTab tab="Repositories" />
        </Link>
        <Link to="/login" onClick={(e) => e.preventDefault()}>
          <AppBarTab tab="Sign in" />
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;