import {Text, View, SafeAreaView} from 'react-native';
import Imagem from '../../library/components/image';
import {estilo} from './estilo/estilo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../res/colors';

const Home = () => {
  return (
    <SafeAreaView style={estilo.container}>
      <View style={estilo.saldo}>
        <Imagem />
        <Text style={{fontSize: 18, color: '#fff', letterSpacing: 4}}>
          Saldo
        </Text>
        <Text style={estilo.textoSaldo}>R$28.250,00</Text>
      </View>

      <View style={estilo.cont_lista}>
        <View style={estilo.text_date}>
          <Icon name="calendar" size={30} color={colors.primary_background} />
          <Text>Selecione Periodo</Text>
        </View>

        <View style={estilo.item}>
          <Text style={{fontSize:18, color:colors.text.others}}>Despesas</Text>
          <Text style={estilo.item.txt_valor}>R$2.025,30</Text>
        </View>

        <View style={estilo.item}>
          <Text style={{fontSize:18, color:colors.text.others}}>Receitas</Text>
          <Text style={estilo.item.txt_valor}>R$7.403,22</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
