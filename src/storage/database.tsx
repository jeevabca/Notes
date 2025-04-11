import {
  openDatabase,
  SQLiteDatabase,
  enablePromise,
} from 'react-native-sqlite-storage';
import { noteItem } from '../storage/type';
import { Alert } from 'react-native';

const tableName = 'notes';

enablePromise(true);
export const getDBConnection = async () => {
  try {
    const db = await openDatabase({ name: 'notes.db', location: 'default' });
    await createTable(db);
    return db;
  } catch (error) {
    console.error('Error opening database:', error);
    throw error;
  }
};

export const createTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    value TEXT NOT NULL
  );`;

  try {
    await db.executeSql(query);
    // console.log('Table created successfully.');
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

export const updateQuery = async (
  db: SQLiteDatabase,
  id: number,
  title: string,
  value: string,
) => {
  try {
    const updateQuery = `UPDATE ${tableName} SET title = ?, value = ? WHERE rowid = ?`;
    // console.log('Update successful:', { title, value });
    db.executeSql(updateQuery, [title, value, id]);

    // return db.executeSql(updateQuery, [title, value]);
  } catch (error) {
    console.error('Error updating note:', error);
  }
};

export const saveNotesItems = async (
  db: SQLiteDatabase,
  title: string,
  value: string,
) => {
  if (!title.trim() || !value.trim()) {
    Alert.alert('Validation Error', 'Title and value cannot be empty.');
    throw new Error('Title and value cannot be empty');
  }
  const insertQuery = `INSERT INTO ${tableName}(title, value) VALUES (?, ?)`;
  return db.executeSql(insertQuery, [title, value]);
};

// export const getNotesItems = async (
//   db: SQLiteDatabase,
// ): Promise<noteItem[]> => {
//   try {
//     const noteItems: noteItem[] = [];
//     const results = await db.executeSql(
//       `SELECT rowid as id,title,value FROM ${tableName}`,
//     );
//     results.forEach(result => {
//       for (let index = 0; index < result.rows.length; index++) {
//         noteItems.push(result.rows.item(index));
//       }
//     });
//     return noteItems;
//   } catch (error) {
//     console.error(error);
//     throw Error('Failed to get todoItems !!!');
//   }
// };

export const getNotesItems = async (
  db: SQLiteDatabase,
): Promise<noteItem[]> => {
  try {
    const noteItems: noteItem[] = [];
    const results = await db.executeSql(
      `SELECT rowid as id, title, value FROM ${tableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        noteItems.push(result.rows.item(index));
      }
    });
    return noteItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get noteItems !!!');
  }
};


export const getTitle = async (db: SQLiteDatabase) => {
  const titles: string[] = [];

  try {
    const results = await db.executeSql(`SELECT title FROM ${tableName}`);
    results.forEach(result => {
      const len = result.rows.length;
      for (let i = 0; i < len; i++) {
        const row = result.rows.item(i);
        if (row?.title) {
          titles.push(row.title);
        }
      }
    });
  } catch (error) {
    console.error('Error fetching titles:', error);
  }
  return titles;
};

export const deleteItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  return await db.executeSql(deleteQuery);
};
