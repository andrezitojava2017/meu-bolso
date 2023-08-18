import {PermissionsAndroid} from 'react-native';
import {ToastAndroid} from 'react-native';

export const leituraExternaStorage = async () => {
  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    {
      title: 'Permissão para acessar fotos',
      message: 'Precisamos de autorização para acessar os arquivos de fotos',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    },
  );

  if (result === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  } else {
    throw new Error('Permissão Negada');
  }
};

export const checarPermissao = async () => {
  const result = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  );
  return result;
};
