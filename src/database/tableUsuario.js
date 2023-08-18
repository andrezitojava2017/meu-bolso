import {conectarDataBase} from './db';

export const criarTabelaUsuario = async () => {
  const db = conectarDataBase();

  db.executeSql(
    'CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR, contato VARCHAR)',
    [],
    result => {
      console.log('Table created successfully');
    },
    error => {
      console.log('Create table error', error);
    },
  );
};

export const buscarUsuario = async () => {
  const db = await conectarDataBase();

  let res = [];
  let sql = 'SELECT * FROM usuario';
  return await new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        sql,
        [],
        (tx, result) => {
          var linhas = result.rows;
          for (let i = 0; i < linhas.length; i++) {
            res.push(linhas.item(i));
          }
          resolve(res);
        },
        error => {
          reject(error);
          console.log('Erro na sql ', error);
        },
      );
    });
  });
};

export const salvarNovoUsuario = async data => {
  const db = conectarDataBase();

  let sql = `insert into usuario (nome, contato) values (?,?)`;

  db.executeSql(
    sql,
    data,
    result => {
      console.log('SUCESSO ');
    },
    error => {
      console.log('Erro ao salvar usuario ', error);
    },
    () => {
      db.close(); // Fechando a conexão após a recuperação das categorias
    },
  );
};
