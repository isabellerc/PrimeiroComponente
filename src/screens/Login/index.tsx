import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/Stack';
import CalculadoraIMC from '../../components/CalculadoraIMC/CalculadoraIMC';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = () => {

const navigation = useNavigation<StackTypes>();

return(
    <View style={styles.container}>

        <Text style={styles.titulo}>Estou na Login</Text>
            <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate("Home")}>
                <Text style={styles.textoBotao}>Ir para a Home</Text>
            </TouchableOpacity>
            
        <TouchableOpacity 
            style={styles.botao}
            onPress={()=> {navigation.navigate("CalculadoraIMC")}}>
            <Text style={styles.textoBotao}>Calculadora de IMC</Text> 
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.botao}
            onPress={()=> {navigation.navigate("Ola")}}>
            <Text style={styles.textoBotao}>Botão de Like</Text> 
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

export default Login;