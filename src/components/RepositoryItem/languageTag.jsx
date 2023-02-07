import { StyleSheet } from "react-native";

import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  tab: {
    color: "#fff",
    backgroundColor: theme.colors.primary,
    marginBottom: 8,
    padding: 6,
    borderRadius: 4
  }
});

const LanguageTag = ({ tag }) => {
  return <Text style={styles.tab}>{tag}</Text>;
};

export default LanguageTag;