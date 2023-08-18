import SQLite from 'react-native-sqlite-storage';

export const conectarDataBase = () => {
  const db = SQLite.openDatabase({name: 'meubolso.db', location: 'default'});
  return db;
};
