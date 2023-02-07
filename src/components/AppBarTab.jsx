import { StyleSheet, Pressable } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
  tab: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 60,
    fontWeight: "bold"
  }
});

const AppBarTab = ({ tab }) => {
  return (
    <Pressable>
      <Text style={styles.tab}>{tab}</Text>
    </Pressable>
  );
};

export default AppBarTab;