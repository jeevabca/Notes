import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NotesHeader: React.FC<{title: string}> = ({title}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <AntDesign name="arrowleft" color={COLORS.WHITE} size={22} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </SafeAreaView>
  );
};

export default NotesHeader;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  backButton: {
    paddingHorizontal: 5,
  },
});
