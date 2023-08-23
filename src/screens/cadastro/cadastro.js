import React, {useState} from 'react';
import {Text, View} from 'react-native';
import estilo from './estilo/estilo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, HStack, Input, VStack} from 'native-base';
import {mascaraTelefone, validaCampos} from './funcoes/acoes';
import {
  criarTabelaUsuario,
  salvarNovoUsuario,
} from '../../database/tableUsuario';
import {ToastAndroid} from 'react-native';
import Imagem from '../../library/components/image';

const Cadastro = ({navigation}) => {
  const [aguardando, setAguardando] = useState(false);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [caminhoImagem, setCaminhoImagem] = useState('');

  const formatarTelefone = value => {
    let tel = mascaraTelefone(value);
    setTelefone(tel);
  };

  const salvarSqlite = async () => {
    setAguardando(true);

    /** valida campo nome */
    try {
      validaCampos(nome, telefone);
    } catch (error) {
      ToastAndroid.showWithGravity(error.message, 5000, ToastAndroid.CENTER);
      setAguardando(false);
      return;
    }

    /**Salva dados na base de dados */
    try {
      await criarTabelaUsuario();
      await salvarNovoUsuario([nome, telefone, caminhoImagem]);

      ToastAndroid.showWithGravity(
        'Isso ai! seus dados já estão cadastrados',
        5000,
        ToastAndroid.BOTTOM,
      );

      navigation.navigate('Home');

      setAguardando(false);
    } catch (error) {
      ToastAndroid.showWithGravity(
        'Ocorreu um erro na captura de dados do usuario!',
        5000,
        ToastAndroid.BOTTOM,
      );
      setAguardando(false);
    }
  };

  return (
    <View style={estilo.container}>
      <View style={estilo.cabecalho}>
        <Text style={estilo.textBoaVindas}>SEJA BEM VINDO</Text>
        <View>
          <Imagem caminho={setCaminhoImagem} />
          <Text style={{fontSize: 12, marginVertical: 12}}>
            Selecione uma foto
          </Text>
        </View>
      </View>
      <View style={estilo.viewInfo}>
        <Text style={estilo.viewInfo.text}>Preencha as informações</Text>
        <VStack alignItems={'center'} space={4}>
          <Input
            onChangeText={value => setNome(value)}
            value={nome}
            size="lg"
            placeholder="Seu nome"
            maxWidth="80%"
            InputLeftElement={<Icon name="account" size={30} color="#0C7489" />}
          />
          <Input
            keyboardType={'numeric'}
            onChangeText={formatarTelefone}
            value={telefone}
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
                onPress={salvarSqlite}>
                PRONTO
              </Button>
            ) : (
              <Button size={'md'} width={180} onPress={salvarSqlite}>
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
