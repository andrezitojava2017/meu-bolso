import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash/splash';
import Home from '../screens/home/Home';
import Cadastro from '../screens/cadastro/cadastro';
import Categoria from '../library/components/categoria/categoria';
import colors from 'res/colors';
import Despesa from '../screens/despesa/despesa';

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
      <StackRouter.Screen
        name="Despesa"
        component={Despesa}
        options={{
          title: 'Nova Despesa',
          headerTitleAlign: 'center',
          headerBackVisible: true,
          headerStyle:{
            backgroundColor: colors.primary_background,
          },
          headerTintColor: colors.text.others,
        }}
      />
    </StackRouter.Navigator>
  );
};

export default Routes;
