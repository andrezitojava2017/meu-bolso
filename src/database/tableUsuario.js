import {conectarDataBase} from './db';

export const criarTabelaUsuario = async () => {
  const db = conectarDataBase();

  return new Promise((resolve, reject) => {
    db.executeSql(
      'CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR, contato VARCHAR)',
      [],
      result => {
        resolve(true);
      },
      error => {
        console.log('Create table error', error);
        reject(error);
      },
      () => {
        db.close();
      },
    );
  });
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

  return new Promise((resolve, reject) => {
    db.executeSql(
      sql,
      data,
      result => {
        console.log('SUCESSO ');
        resolve('usuario inserido');
      },
      error => {
        console.log('Erro ao salvar usuario ', error);
        reject(error);
      },
      () => {
        db.close(); // Fechando a conexão após a recuperação das categorias
      },
    );
  });
};
