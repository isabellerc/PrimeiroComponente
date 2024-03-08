import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { StackTypes} from '../../routes/Stack';

const Home = () => {
    //onde vamos acessar as funções de navegação
    const navigation = useNavigation<StackTypes>();

return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Estou na Home</Text>
       
        <TouchableOpacity 
            style={styles.botao} 
            onPress={() => navigation.navigate("Login")}>
        <Text style={styles.textoBotao}>Fazer Login</Text>
        </TouchableOpacity>

    </View>
);
};


const styles = StyleSheet.create({

    container: {
        flex: 1, // Garante que o container ocupe toda a tela
        width: '100%', // Garante que o container tenha a largura total da tela
        alignItems: 'center', // Centraliza o conteúdo na tela horizontalmente
        justifyContent: 'center', // Centraliza o conteúdo na tela verticalmente
      },

    titulo:{
        fontSize: 30,
    },

    botao: {
      backgroundColor: 'blue',
      padding: 5,
      borderRadius: 5,
      margin: 40,
    },
    textoBotao: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },
  });
    

export default Home;