import { StyleSheet, View, Image } from "react-native"
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 5,
        gap: 10
    },
    infoContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 10
    },
    fieldsContainer: {
        display: "flex",
        gap: 5,
        justifyContent: "flex-start"
    },
    statsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    avatarImg: {
        width: 50,
        height: 50
    },
    languageLabel: {
        color: "white",
        backgroundColor: theme.colors.primary,
        padding: 5,
        borderRadius: 3
    },
    stat: {
        display: "flex",
        alignItems: "center"
    }
})

const Stat = ({ name, amount }) => {
    const amountRound = amount >= 1000 ? 
        (amount / 1000).toFixed(1) + "k" : 
        amount

    return <View style={styles.stat}>
        <Text fontWeight="bold">{amountRound}</Text>
        <Text color="textSecondary">{name}</Text>
    </View>
}

const RepositoryItem = ({ repository }) => {
    return <View style={styles.container}>
        <View style={styles.infoContainer}>
            <Image 
                style={styles.avatarImg}
                source={{uri: repository.ownerAvatarUrl}}/>
            <View style={styles.fieldsContainer}>
                <Text fontSize="subheading" fontWeight="bold">
                    {repository.fullName}
                </Text>
                <Text color="textSecondary">
                    {repository.description}
                </Text>
                <Text style={styles.languageLabel}>
                    {repository.language}
                </Text>
            </View>
        </View>
        <View style={styles.statsContainer}>
            <Stat name="Stars" amount={repository.stargazersCount}/>
            <Stat name="Forks" amount={repository.forksCount}/>
            <Stat name="Reviews" amount={repository.reviewCount}/>
            <Stat name="Rating" amount={repository.ratingAverage}/>
        </View>
    </View>
}

export default RepositoryItem;