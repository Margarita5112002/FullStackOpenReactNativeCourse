import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.colors.background,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    columnGap: 10
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab label="Repositories" route="/" />
    <AppBarTab label="Sign In" route="/signin" />
  </View>;
};

export default AppBar;