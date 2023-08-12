import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import Routes from './src/routes/stack';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
