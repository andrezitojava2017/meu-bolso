import {Image, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import logo from '../assets/ico_user.png';
import RNFS from 'react-native-fs';

const Imagem = ({set, get}) => {
  /**
   * Função que ira tipar a imagem, para depois ser salva no storage
   * @param {String} type tipo de imagem que esta sendo selecionada
   * @returns {tipoSelec} tipoSelec
   */
  const tipoImagem = async type => {
    const tipoSelec = type.split('/')[1];
    return tipoSelec;
  };

  const copiarFotoPerfil = async () => {
    const nomeImagem = `perfil.${await tipoImagem(get[0].type)}`;

    const destino = `${RNFS.ExternalDirectoryPath}/${nomeImagem}`;
    RNFS.copyFile(get[0].uri, destino)
      .then(rs => {
        return;
      })
      .catch(error => {
        throw error;
      });
  };

  const selecionarFoto = async () => {
    const options = {mediaType: 'photo'};
    const result = await launchImageLibrary(options);

    if (result.didCancel) {
      return;
    }
    if (result.errorCode == 'camera_unavailable') {
      throw new Error('Erro a tentar acessar camera');
    }

    if (result.errorCode == 'permission') {
      throw new Error('Não ha permissao para acessar camera/diretorios');
    }

    if (result.errorCode == 'others') {
      throw new Error('Ocorreu um erro desconhecido!');
    }

    set(result.assets);
    
    try {
      await copiarFotoPerfil();

    } catch (error) {

      ToastAndroid.showWithGravity(
        `${error.message}`,
        5000,
        ToastAndroid.BOTTOM,
      );
    }
  };

  const buscarFotoPerfil = async () => {
    try {
      const photo = await selecionarFoto();
    } catch (error) {
      ToastAndroid.showWithGravity(error.message, 5000, ToastAndroid.CENTER);
    }
  };

  return (
    <TouchableOpacity onPress={buscarFotoPerfil}>
      {get.length != 0 ? (
        <Image
          style={estilo.imagem}
          source={{
            uri: get[0].uri,
          }}
        />
      ) : (
        <Image style={estilo.imagem} source={logo} />
      )}
    </TouchableOpacity>
  );
};

const estilo = StyleSheet.create({
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default Imagem;
