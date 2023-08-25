import React from 'react';
import {VStack} from 'native-base';
import {Center, Text, Input, Box} from 'native-base';
import colors from 'res/colors';
import Categoria from '../../library/components/categoria/categoria';
import Subcategoria from '../../library/components/subcategoria/subcategoria';

const Despesa = () => {
  return (
    <VStack space={4} bgColor={colors.primary_background} flex={1} alignItems={'center'}>
      <Center
        flexDirection={'row'}
        height={50}
        width={80}
        bg={colors.secundary_background}
        rounded="md"
        shadow={3}
        marginTop={4}
        alignSelf={'center'}>
        
        <Text color={colors.primary_background}>
          Segunda Feira, 25 de agosto de 2023
        </Text>
      </Center>

      <Box alignItems={'center'} marginTop={8}>
        <Input
          textAlign={'center'}
          letterSpacing={2}
          fontSize={22}
          keyboardType="decimal-pad"
          color={colors.primary_background}
          backgroundColor={colors.secundary_background}
          width={80}
          placeholder="Informe o valor"
        />
      </Box>
      <Categoria/>
      <Subcategoria/>
    </VStack>
  );
};

export default Despesa;
