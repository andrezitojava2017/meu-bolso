import {StyleSheet} from 'react-native';
import colors from '../../../res/colors';

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },
  saldo: {
    alignItems: 'center',
  },
  textoSaldo: {
    fontFamily: 'Bungee-Regular',
    fontSize: 22,
    color: colors.text.others,
  },
  cont_lista: {
    flex: 2,
    marginTop: 18,
    backgroundColor: colors.secundary_background,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  text_date: {
    fontFamily:'NotoSans-Regular',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginVertical: 14,
  },
  item: {
    borderRadius:30,
    alignItems: 'center',
    backgroundColor: colors.primary_background,
    marginHorizontal: 22,
    padding: 18,
    marginBottom: 22,
    txt_valor: {
      fontFamily: 'Bungee-Regular',
      fontSize: 22,
      color: colors.text.others,
    },
  },
});
