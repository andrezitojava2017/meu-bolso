import React from 'react';
import {VStack} from 'native-base';
import {Center, Text, Input, Box} from 'native-base';
import colors from 'res/colors';
import Categoria from '../../library/components/categoria/categoria';
import Subcategoria from '../../library/components/subcategoria/subcategoria';
import DataRegistro from '../../library/components/data/data';

const Despesa = () => {
  return (
    <VStack
      space={4}
      bgColor={colors.primary_background}
      flex={1}
      alignItems={'center'}>
        
      <DataRegistro />

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
      <Categoria />
      <Subcategoria />
    </VStack>
  );
};

export default Despesa;
