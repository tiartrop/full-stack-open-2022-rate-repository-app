import { View, StyleSheet } from "react-native";

import Text from "../Text";
import Avatar from "./Avatar";
import Foot from "./Foot";
import LanguageTag from "./languageTag";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 12,
    backgroundColor: "white"
  },
  flexContainerColSS: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "80%"
  },
  flexContainerRowAS: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  flexContainerRowSS: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  box: {
    width: 80,
    height: 80
  }
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainerRowSS}>
        <View>
          <Avatar ownerAvatarUrl={repository.ownerAvatarUrl} />
        </View>
        <View style={styles.flexContainerColSS}>
          <Text fontWeight="bold" style={{ marginBottom: 4 }}>
            {repository.fullName}
          </Text>
          <Text color="textSecondary" style={{ marginBottom: 4 }}>
            {repository.description}
          </Text>
          <LanguageTag tag={repository.language} />
        </View>
      </View>
      <View style={styles.flexContainerRowAS}>
        <Foot label={"Starts"} value={repository.stargazersCount} />
        <Foot label={"Forks"} value={repository.forksCount} />
        <Foot label={"Reviews"} value={repository.reviewCount} />
        <Foot label={"Rating"} value={repository.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;