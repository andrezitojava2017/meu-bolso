import { Center, Text } from 'native-base';
import React from 'react';

const DataRegistro = () => {

    const gerarData = ()=>{
        const option = {
            year: 'numeric',
            month: 'long',
            weekday: 'long',
            day: 'numeric' || '2-digit',
        }
        const dataReg = new Date().toLocaleDateString('pt-BR', option);
        console.log(dataReg)

    }

  return (
    <Center
      flexDirection={'row'}
      height={50}
      width={80}
      bg={colors.secundary_background}
      rounded="md"
      shadow={3}
      marginTop={4}
      alignSelf={'center'}>
      <Text color={colors.primary_background} onPress={gerarData}>
        Segunda Feira, 25 de agosto de 2023
      </Text>
    </Center>
  );
};

export default DataRegistro;
