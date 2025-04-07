import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../components/Header/Header';
import AddItem from '../components/AddItem/AddItem';
import {FlatList} from 'react-native-gesture-handler';
import {limitToWords} from '../helper/helper';
import useHomeScreenController from '../view-controller/useHomeScreenController';
import {SCREENS} from '../constants/ScreenNames';
import {COLORS} from '../constants/Colors';

const HomeScreen = () => {
  const {confirmDelete, notes, navigation} = useHomeScreenController();
  return (
    <View style={styles.container}>
      <Header title="Notebooks" />
      <AddItem />
      <FlatList
        data={notes}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({item}) => (
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
    marginBottom: 140,
  },
  noteItem: {
    flex: 1,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5, // Add horizontal margin to add space between items
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  columnWrapper: {
    justifyContent: 'space-between', // Add spacing between columns
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
