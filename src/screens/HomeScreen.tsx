import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import AddItem from '../components/AddItem/AddItem';
import { FlatList } from 'react-native-gesture-handler';
import { limitToWords } from '../helper/helper';
import useHomeScreenController from '../view-controller/useHomeScreenController';
import { SCREENS } from '../constants/ScreenNames';
import { COLORS } from '../constants/Colors';
import { useIsFocused } from '@react-navigation/native';

const HomeScreen = () => {
  const isFocused = useIsFocused();
  const [titonly, setTitOnly] = useState([])
  const [searchText, setSearchText] = useState('');
  const { confirmDelete, notes, navigation, getTitleOnly } = useHomeScreenController();


  const gettit = async () => {
    const gettit = await getTitleOnly();
    setTitOnly(gettit)
  };

  useEffect(() => {
    if (isFocused) {
      gettit();
    }
  }, [isFocused]);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Header title="Notebooks" titleonly={titonly} onSearch={setSearchText} />
      <AddItem />
      <FlatList
        data={filteredNotes}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.noteItem}
            onPress={() =>
              navigation.navigate(SCREENS.NOTESDETAILSCREEN, {
                id: item.id,
                title: item.title,
                value: item.value,
              })
            }
            onLongPress={() => confirmDelete(item.id)}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteValue}>{limitToWords(item.value, 20)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  noteItem: {
    flex: 1,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  noteValue: {
    fontSize: 14,
    color: '#333',
  },
});
