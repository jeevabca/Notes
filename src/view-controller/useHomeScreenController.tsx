import { Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import useViewModel from '../view-models/useViewModel';

type NavigationProp = {
  navigate: (screen: string) => void;
};

const useHomeScreenController = () => {
  const [notes, setNotes] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation<NavigationProp>();

  const { getNotes, deleteNote, getTitleOnly } = useViewModel();

  const loadNotes = async () => {
    try {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error loading notes:', error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      loadNotes();
    }
  }, [isFocused]);

  const confirmDelete = (id: number) => {
    Alert.alert('Delete Note', 'Are you sure you want to delete this note?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => handleDeleteNote(id),
      },
    ]);
  };

  const handleDeleteNote = async (id: number) => {
    try {
      await deleteNote(id);
      loadNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };
  return {
    handleDeleteNote,
    confirmDelete,
    loadNotes,
    notes,
    navigation,
    getTitleOnly
  };
};

export default useHomeScreenController;
