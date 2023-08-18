import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {
  checarPermissao,
  leituraExternaStorage,
} from '../permicoes/leituraExterna';

const buscarFotoPerfil = async () => {
  const rs = await checarPermissao();

  if (rs) {
    console.log('Chamar função para selecionar a foto');
  } else {
    try {
      await leituraExternaStorage();
      buscarFotoPerfil();
    } catch (error) {
      ToastAndroid.showWithGravity(error.message, 5000, ToastAndroid.CENTER);
    }
  }
};

const Imagem = () => {
  return (
    <TouchableOpacity onPress={buscarFotoPerfil}>
      <Image
        style={estilo.imagem}
        source={{
          uri: 'https://avatars.githubusercontent.com/u/25111991?v=4',
        }}
      />
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
