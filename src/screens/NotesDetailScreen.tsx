import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import NotesHeader from '../components/Header/NotesHeader';
import {TextInput} from 'react-native-paper';
import useNotesDetailScreen from '../view-controller/useNotesDetailScreenController';

const NotesDetailScreen = () => {
  const {addNotes, title, setTitle, value, setValue} = useNotesDetailScreen();
  return (
    <>
      <NotesHeader title="Notes" />
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <TextInput
                value={title}
                onChangeText={text => setTitle(text)}
                placeholder="Title"
                placeholderTextColor="gray"
                cursorColor="black"
                style={{height: 80, fontSize: 20, fontWeight: '300'}}
              />
              <TextInput
                value={value}
                onChangeText={text => setValue(text)}
                placeholder="Description"
                cursorColor="black"
                placeholderTextColor="gray"
                style={{backgroundColor: 'white', paddingVertical: 3}}
                multiline
              />
              <TouchableOpacity onPress={addNotes} style={styles.button}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                  Save Note
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};

export default NotesDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'gray',
    width: 120,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 10,
  },
});
