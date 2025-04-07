import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';

const SearchNotesScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.SearchContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <AntDesign name="arrowleft" color={COLORS.BLACK} size={22} />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />

        {searchText ? (
          <TouchableOpacity
            onPress={() => setSearchText('')}
            style={styles.clearButton}>
            <AntDesign name="closecircle" size={18} color={COLORS.BLACK} />
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default SearchNotesScreen;

const styles = StyleSheet.create({
  SearchContainer: {
    backgroundColor: COLORS.WHITE,
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
  },
  backButton: {
    paddingHorizontal: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_GREY,
    borderRadius: 8,
    marginLeft: 18,
    flex: 1,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 6,
    color: COLORS.BLACK,
  },
  clearButton: {
    marginLeft: 10,
  },
});
