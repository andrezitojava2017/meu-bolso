import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash/splash';
import Home from '../screens/home/Home';
import Cadastro from '../screens/cadastro/cadastro';

const StackRouter = createNativeStackNavigator();

const Routes = () => {
  return (
    <StackRouter.Navigator initialRouteName="Splash">
      <StackRouter.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <StackRouter.Screen name="Home" component={Home} />
      <StackRouter.Screen
        name="Cadastro"
        component={Cadastro}
        options={{headerShown: false}}
      />
    </StackRouter.Navigator>
  );
};

export default Routes;
