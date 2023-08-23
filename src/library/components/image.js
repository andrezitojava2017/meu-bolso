import {Image, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import logo from '../assets/ico_user.png';
import RNFS from 'react-native-fs';
import {useState} from 'react';

const Imagem = ({caminho}) => {
  const [uriPerfil, setUriPerfil] = useState();

  /**
   * Função que ira tipar a imagem, para depois ser salva no storage
   * @param {String} type tipo de imagem que esta sendo selecionada
   * @returns {tipoSelec} tipoSelec
   */
  const tipoImagem = async tipo => {

    return new Promise((resolve, reject) => {
      let tipoSelec = tipo.split('/')[1];
      resolve(tipoSelec);

    }).catch(error => {
      reject(error);
    });
  };

  const copiarFotoPerfil = async info => {
    try {
      const tipoImg = await tipoImagem(info.type);
      const nomeImagem = `perfil.${tipoImg}`;

      const destino = `${RNFS.ExternalDirectoryPath}/${nomeImagem}`;

      RNFS.copyFile(info.uri, destino)
        .then(rs => {
          // aqui vamos setar, o state setCaminhoFoto() o caminho onde esta a foto do usuario
          // para que possa ser salva na base somente o camiho
          caminho(destino);
          return;
        })
        .catch(error => {
          throw error;
        });
    } catch (error) {
      throw error;
    }
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

    setUriPerfil({...result.assets[0]});

    try {

      await copiarFotoPerfil(result.assets[0]);

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
      {uriPerfil ? (
        <Image
          style={estilo.imagem}
          source={{
            uri: uriPerfil.uri,
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
