import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { StackTypes} from '../../routes/Stack';

//interface conecta o mundo externo com o componente
interface CalculoProps {
}
//nome do componente e definição das propriedades que ele está apto para receber: React.FC mostra que isso daqui é um componente
const CalculadoraIMC: React.FC = () => {
  const navigation = useNavigation();
  

  //sintaxe const(variavel, funçao que atribui valor na variavel)
  const[nome, setNome] = useState<string>('');
  const [sexo, setSexo] = useState('');
  const[peso, setPeso] = useState<number>(0);
  const[altura, setAltura] = useState<number>(0);
  const[resultado, setResultado] =useState<number>(0);
 //criar uma validação para preencher os dois campos
 
 function calcularIMC(){
  // Convertendo a altura de cm para metros
  const alturaMetros = altura / 100;
  
  // Calculando o IMC
  const imc = peso / (alturaMetros * alturaMetros);
  
  // Atualizando o estado com o novo valor de IMC
  setResultado(imc);
  
  if(imc < 18.5){
      // Exibindo o resultado
      alert('Resultado: ' + imc.toFixed(2) + '. Você está abaixo do peso!'); // Arredondando para duas casas decimais
  }
  
  else if (imc > 24.9) {
    // Exibindo o resultado
    alert('Resultado: ' + imc.toFixed(2) + '. Você está acima do peso!'); // Arredondando para duas casas decimais
  }
  else if(imc > 18.5 && imc < 24.9){
  alert('Resultado: ' + imc.toFixed(2) + '. Você está no peso ideal!'); // Arredondando para duas casas decimais
  }
  else{
    alert('Preencha todos os campos para o resultado!');
  }
} 


 return(
   <View style={styles.container}>
          
     <Text>IMC</Text>
     <Text>Digite seu nome:</Text>
       <TextInput
         placeholder='_______________'
         onChangeText={(txtNome) => setNome(txtNome)}
       />

       <Text>Seja bem-vindo(a)!</Text>
         <Text>Informe seu peso:</Text>
         <TextInput
           placeholder='Ex: 53 kg'
           onChangeText={(txtPeso) => setPeso(parseInt(txtPeso))}
           keyboardType='numeric'
         />
         
         <Text >Informe sua altura:</Text>
         <TextInput
           placeholder='Ex: 164 cm'
           onChangeText={(txtAltura) => setAltura(parseInt(txtAltura))}
           keyboardType='numeric'
         />

         <TouchableOpacity onPress={calcularIMC}>
           <Text>Calcular IMC</Text>
         </TouchableOpacity>
      </View>
      )
  
 }
 
    const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    greeting: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 16,
    },
  });
  
  //é acessível para quem for usar ele no mundo externo:
  export default CalculadoraIMC;