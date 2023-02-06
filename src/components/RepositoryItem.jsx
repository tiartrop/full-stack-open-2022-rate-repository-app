import { Text } from "react-native";

const RepositoryItem = ({ repository }) => {
  return (
    <>
      <Text>Full name:{repository.fullName}</Text>
      <Text>Description:{repository.description}</Text>
      <Text>Language:{repository.language}</Text>
      <Text>Starts:{repository.stargazersCount}</Text>
      <Text>Forks:{repository.forksCount}</Text>
      <Text>Reviews:{repository.reviewCount}</Text>
      <Text>Rating:{repository.ratingAverage}</Text>
    </>
  );
};

export default RepositoryItem;