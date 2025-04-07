import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {SCREENS} from '../constants/ScreenNames';
import useViewModel from '../view-models/useViewModel';

type RouteParams = {
  id: number;
  title: string;
  value: string;
};

type NavigationProp = {
  navigate: (screen: string) => void;
};

const useNotesDetailScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const {
    id,
    title: initialTitle,
    value: initialValue,
  } = route.params as RouteParams;
  const [title, setTitle] = useState(initialTitle || '');
  const [value, setValue] = useState(initialValue || '');

  const {saveNote, updateNote} = useViewModel();

  const addNotes = async () => {
    if (!title.trim() || !value.trim()) {
      alert('Title and description cannot be empty!');
      return;
    }

    try {
      if (id) {
        await updateNote(id, title, value); // Implement updateNote in ViewModel
        console.log('Updated:', title, value);
      } else {
        await saveNote(title, value); // Implement saveNote in ViewModel
        console.log('Note saved:', {title, value});
      }

      navigation.navigate(SCREENS.HOMESCREEN);
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };
  return {
    addNotes,
    title,
    setTitle,
    value,
    setValue,
  };
};

export default useNotesDetailScreen;
