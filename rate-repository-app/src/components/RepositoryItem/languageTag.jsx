import Text from "../Text";
import { buttonStyle } from "../../theme";

const LanguageTag = ({ tag }) => {
  return <Text style={buttonStyle.primary}>{tag}</Text>;
};

export default LanguageTag;