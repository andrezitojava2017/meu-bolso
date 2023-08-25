import {Box, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from 'res/colors';

const Categoria = () => {
  return (
    <Box
      width={80}
      bg={colors.secundary_background}
      rounded="md"
      shadow={3}
      marginTop={4}>
      <Text color={colors.primary_background} textAlign={'center'} fontSize={18}>
        Categoria
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
         <Box padding={2}>
          <Icon name="calendar" size={24} color={colors.primary_background} />
          <Text fontSize={10}>Mercado</Text>
        </Box>
         <Box padding={2}>
          <Icon name="calendar" size={24} color={colors.primary_background} />
          <Text fontSize={10}>Mercado</Text>
        </Box>

         <Box padding={2}>
          <Icon name="calendar" size={24} color={colors.primary_background} />
          <Text fontSize={10}>Mercado</Text>
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
export default Categoria;
