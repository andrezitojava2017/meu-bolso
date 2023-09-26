import {View, Text} from 'react-native';
import estilo from './estilo/estilo';
import colors from 'res/colors';
import {TouchableOpacity} from 'react-native';

const Splash = ({navigation}) => {
  const irParaHome = () => {
    navigation.navigate('Despesa');
  };

  return (
    <View style={estilo.container}>
      <View style={estilo.detalhe}></View>
      <View style={estilo.main}>
        <Text style={estilo.titulo}>APP MEU BOLSO</Text>
        <Text style={{textAlign: 'center', color: colors.others}}>
          Vamos começar?
        </Text>
        <View style={estilo.containerbutton}>
          <TouchableOpacity style={estilo.button} onPress={irParaHome}>
            <Text
              style={{
                color: colors.primary_background,
                fontSize: 18,
                fontFamily: 'NotoSans-Regular',
              }}>
              Vamos lá!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Splash;
