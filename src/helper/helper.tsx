import {Alert} from 'react-native';
import {deleteItem, getDBConnection, getNotesItems} from '../storage/database';

export const limitToWords = (text: string, wordLimit: number) => {
  const words = text.split(/\s+/); // Split by whitespace
  return (
    words.slice(0, wordLimit).join(' ') +
    (words.length > wordLimit ? '...' : '')
  );
};
