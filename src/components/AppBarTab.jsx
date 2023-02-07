import { StyleSheet } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
  tab: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 60,
    fontWeight: "bold",
    paddingLeft: 12,
    paddingRight: 12
  }
});

const AppBarTab = ({ tab }) => {
  return (
    <>
      <Text style={styles.tab}>{tab}</Text>
    </>
  );
};

export default AppBarTab;