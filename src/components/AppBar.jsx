import { View, StyleSheet, ScrollView } from 'react-native';
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
  },
  scroll: {
    display: "flex",
    gap: 10
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal style={styles.scroll}>
    <AppBarTab label="Repositories" route="/" />
    <AppBarTab label="Sign In" route="/signin" />
    </ScrollView>
  </View>;
};

export default AppBar;