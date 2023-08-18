import {StyleSheet} from 'react-native';
import colors from 'res/colors';

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },
  cabecalho: {
    marginTop: 50,
    alignItems: 'center',
  },
  textBoaVindas: {
    fontFamily: 'Bungee-Regular',
    fontSize: 22,
    color: colors.text.others
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  viewInfo: {
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: colors.secundary_background,
    text: {
      color: colors.text.subtitle,
      textAlign: 'center',
      fontSize: 20,
      marginVertical: 34,
    },
  },
  inputs: {
    alignItems: 'center',
    gap: 14,
  },
});

export default estilo;
