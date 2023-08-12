import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import estilo from './estilo/estilo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, HStack, Input, VStack} from 'native-base';

const Cadastro = () => {
  const [aguardando, setAguardando] = useState(false);

  return (
    <View style={estilo.container}>
      <View style={estilo.cabecalho}>
        <Text style={estilo.textBoaVindas}>SEJA BEM VINDO</Text>
        <View>
          <Image
            style={estilo.imagem}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/25111991?v=4',
            }}
          />
          <Text style={{fontSize: 12, marginVertical: 12}}>
            Selecione uma foto
          </Text>
        </View>
      </View>
      <View style={estilo.viewInfo}>
        <Text style={estilo.viewInfo.text}>Preencha as informações</Text>
        <VStack alignItems={'center'} space={4}>
          <Input
            size="lg"
            placeholder="Seu nome"
            maxWidth="80%"
            InputLeftElement={<Icon name="account" size={30} color="#0C7489" />}
          />
          <Input
            size="lg"
            placeholder="Telefone"
            maxWidth="80%"
            InputLeftElement={<Icon name="phone" size={30} color="#0C7489" />}
          />
          <HStack>
            {aguardando ? (
              <Button
                isLoading={aguardando}
                isLoadingText="Aguarde"
                onPress={() => setAguardando(false)}>
                PRONTO
              </Button>
            ) : (
              <Button
                size={'md'}
                width={180}
                onPress={() => setAguardando(true)}>
                PRONTO
              </Button>
            )}
          </HStack>
        </VStack>
      </View>
    </View>
  );
};

export default Cadastro;
