/**
 * Funcao que formata o numero de telefone fornecido no padrao de 11 caracteres
 * @param {String} numero - Numero de telefone
 */
export const mascaraTelefone = numero => {
  if (!numero) return '';
  numero = numero.replace(/\D/g, '');
  numero = numero.replace(/(\d{2})(\d)/, '($1) $2');
  numero = numero.replace(/(\d)(\d{4})$/, '$1-$2');
  return numero;
};

/**
 * Função qpara verificar se os valores informados não sao null, undefined ou vazio
 * @param {String} nome
 * @param {String} contato
 */
export const validaCampos = (nome, contato) => {
  if (nome === null || nome === undefined || nome === '') {
    throw Error('Campo Nome precisa ser preenchido!');
  }
  if (contato === null || contato === undefined || contato === '') {
    throw Error('Campo Contato precisa ser preenchido!');
  }

  return;
};
