const {StyleSheet} = require('react-native');
import colors from 'res/colors';

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.primary_background,
    alignItems: 'center',
  },
  titulo: {
    fontFamily: 'Bungee-Regular',
    fontSize: 24,
  },
  detalhe: {
    position: 'absolute',
    backgroundColor: colors.secundary_background,
    borderBottomLeftRadius: 80,
    height: '50%',
    width: '60%',
    marginTop: -60,
    right: 0,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  containerbutton: {
    position: 'relative',
    bottom: -100,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 170,
    borderRadius: 40,
    backgroundColor: colors.secundary_background,
  },
});

export default estilo;
