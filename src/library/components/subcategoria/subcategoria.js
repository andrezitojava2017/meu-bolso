import {Box, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from 'res/colors';

const Subcategoria = () => {
  return (
    <Box
      marginTop={8}
      width={'100%'}
      height={'80%'}
      backgroundColor={colors.secundary_background}
      borderTopLeftRadius={60}
      borderTopRightRadius={60}>
        
      <Text
        textAlign={'center'}
        marginTop={4}
        fontSize={18}
        color={colors.primary_background}>
        Subcategorias
      </Text>

      <Box
        width={'100%'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        flexWrap={'wrap'}>

        <Box padding={2}>
          <Icon name="calendar" size={24} color={colors.primary_background} />
          <Text fontSize={10}>Transporte</Text>
        </Box>

        <Box padding={2}>
          <Icon name="calendar" size={24} color={colors.primary_background} />
          <Text fontSize={10}>Viagem</Text>
        </Box>

        <Box padding={2}>
          <Icon name="calendar" size={24} color={colors.primary_background} />
          <Text fontSize={10}>Mercado</Text>
        </Box>

        <Box padding={2}>
          <Icon name="calendar" size={24} color={colors.primary_background} />
          <Text fontSize={10}>Mercado</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Subcategoria;
