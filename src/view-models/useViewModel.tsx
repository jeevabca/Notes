import {
  deleteItem,
  getDBConnection,
  getNotesItems,
  saveNotesItems,
  updateQuery,
} from '../storage/database';

const useViewModel = () => {
  const getNotes = async () => {
    try {
      const db = await getDBConnection();
      return await getNotesItems(db);
    } catch (error) {
      console.error('Error fetching notes:', error);
      throw error;
    }
  };

  const saveNote = async (title: string, value: string) => {
    try {
      const db = await getDBConnection();
      await saveNotesItems(db, title, value);
    } catch (error) {
      console.error('Error saving note:', error);
      throw error;
    }
  };

  const updateNote = async (id: number, title: string, value: string) => {
    try {
      const db = await getDBConnection();
      await updateQuery(db, id, title, value);
    } catch (error) {
      console.error('Error updating note:', error);
      throw error;
    }
  };

  const deleteNote = async (id: number) => {
    try {
      const db = await getDBConnection();
      await deleteItem(db, id);
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error;
    }
  };

  return {
    getNotes,
    deleteNote,
    updateNote,
    saveNote,
  };
};

export default useViewModel;
