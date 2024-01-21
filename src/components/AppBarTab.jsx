import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ label }) => {
    return (
        <Pressable>
            <Text 
                color="textSecondary" 
                fontSize="subheading" 
                fontWeight="bold">
                {label}
            </Text>
        </Pressable>
    )
}

export default AppBarTab;