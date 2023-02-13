import { StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 16
  }
});

const Avatar = ({ ownerAvatarUrl }) => {
  return <Image style={styles.tinyLogo} source={{ uri: `${ownerAvatarUrl}` }} />;
};

export default Avatar;