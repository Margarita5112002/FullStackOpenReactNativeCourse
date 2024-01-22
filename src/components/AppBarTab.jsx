import Text from "./Text";
import { Link } from "react-router-native";

const AppBarTab = ({ label, route }) => {
    return (
        <Link to={route}>
            <Text 
                color="textSecondary" 
                fontSize="subheading" 
                fontWeight="bold">
                {label}
            </Text>
        </Link>
    )
}

export default AppBarTab;