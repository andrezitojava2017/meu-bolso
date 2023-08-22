import {Image, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import logo from '../assets/ico_user.png';

const Imagem = ({set, get}) => {

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
