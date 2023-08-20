import SQLite from 'react-native-sqlite-storage';

export const conectarDataBase = async () => {
  const db = await SQLite.openDatabase({
    name: 'meubolso.db',
    location: 'default',
  });
  return db;
};
