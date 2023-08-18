import {View, Image, StyleSheet} from 'react-native';

const Imagem = () => {
  return (
    <Image
      style={estilo.imagem}
      source={{
        uri: 'https://avatars.githubusercontent.com/u/25111991?v=4',
      }}
    />
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
