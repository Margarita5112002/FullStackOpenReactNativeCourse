import { View, Text } from "react-native"

const RepositoryItem = ({ repository }) => {
    return <View>
        <Text>
            Full name: {repository.fullName}{'\n'}
            Description: {repository.description}{'\n'}
            Language: {repository.language}{'\n'}
            Stars: {repository.stargazersCount}{'\n'}
            Forks: {repository.forksCount}{'\n'}
            Reviews: {repository.reviewCount}{'\n'}
            Rating: {repository.ratingAverage}
        </Text>
    </View>
}

export default RepositoryItem;