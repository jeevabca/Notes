import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../constants/ScreenNames';

type NavigationProp = {
  navigate: (screen: string) => void;
};

const Header: React.FC<{title: string}> = ({title}) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>

      <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => navigation.navigate(SCREENS.SEARCHNOTESSCREEN)}>
        <Ionicons name="search" size={20} color={COLORS.WHITE} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchIcon: {
    padding: 5,
  },
});
