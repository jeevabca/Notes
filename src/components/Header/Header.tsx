import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


type HeaderProps = {
  title: string;
  titleonly: string[];
  onSearch: (text: string) => void;
};

const Header: React.FC<HeaderProps> = ({ title, titleonly, onSearch }) => {

  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  console.log("fromt header", titleonly);
  const handleSearchChange = (text: string) => {
    setSearchText(text);
    onSearch(text); // notify parent
  };

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>

        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => setIsSearching(prev => !prev)}
        >
          <Ionicons name="search" size={20} color={COLORS.WHITE} />
        </TouchableOpacity>
      </View>

      {isSearching && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={handleSearchChange}
            autoFocus
          />

          {searchText ? (
            <TouchableOpacity
              onPress={() => {
                setSearchText('');
                onSearch(''); // reset filter
              }}
              style={styles.clearButton}
            >
              <AntDesign name="closecircle" size={18} color={COLORS.BLACK} />
            </TouchableOpacity>
          ) : null}
        </View>
      )}
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_GREY,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: COLORS.BLACK,
  },
  clearButton: {
    marginLeft: 8,
  },

});
