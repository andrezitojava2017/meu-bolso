import {conectarDataBase} from './db';

export const criarTabelaUsuario = async () => {
  const db = await conectarDataBase();

  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR, contato VARCHAR)`,
      [],
      result => {
        return true;
      },
      error => {
        console.log(
          'Ocorreu um erro na tentativa de criar a tabela USUARIO: ',
          error,
        );
        throw error;
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

    db.transaction(tx => {
      tx.executeSql(
        sql,
        [],
        (tx, result) => {
          var linhas = result.rows;
          for (let i = 0; i < linhas.length; i++) {
            //console.log(linhas.item(i));
            res.push(linhas.item(i));
          }
          resolve(res);
        },
        error => {
          console.log('Não foi possivel buscar dados de usuario: ', error);
          reject(error);
          //throw error;
        },
        () => {
          db.close();
        },
      );
    });
};

export const salvarNovoUsuario = async data => {
  const db = await conectarDataBase();

  let sql = `insert into usuario (nome, contato) values (?,?)`;

  // return new Promise((resolve, reject) => {
  await db.transaction(tx => {
    tx.executeSql(
      sql,
      data,
      result => {
        console.log('SUCESSO ');
      },
      error => {
        console.log('Não foi possivel inserir os dados do usuario: ', error);
        throw error;
      },
      () => {
        db.close();
      },
    );
  });

  // });
};
