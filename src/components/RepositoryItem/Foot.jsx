import { StyleSheet, View } from "react-native";

import Text from "../Text";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    alignItems: "center"
  }
});

const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
};

const Foot = ({ label, value }) => {
  return (
    <View style={styles.flexContainer}>
      <Text fontWeight="bold" fontSize="subheading">
        {kFormatter(value)}
      </Text>
      <Text color="textSecondary" fontSize="subheading">
        {label}
      </Text>
    </View>
  );
};

export default Foot;