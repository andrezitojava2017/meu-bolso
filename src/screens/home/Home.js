import {Text, View, SafeAreaView} from 'react-native';
import Imagem from '../../library/components/image';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Imagem />
      </View>
      <Text style={{fontFamily: 'Bungee-Regular'}}>
        App Meu bolso em produção
      </Text>
    </SafeAreaView>
  );
};

export default Home;
