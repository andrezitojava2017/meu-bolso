import {SafeAreaView} from 'react-native';
import Cadastro from './src/screens/cadastro/cadastro';
import {NativeBaseProvider} from 'native-base';
import Splash from './src/screens/splash/splash';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NativeBaseProvider>
        <Splash />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default App;
