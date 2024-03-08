import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

//interface conecta o mundo externo com o componente
interface OlaProps {
    
}
//nome do componente e definição das propriedades que ele está apto para receber: React.FC mostra que isso daqui é um componente
const Ola : React.FC<OlaProps> = () => {
  const navigation = useNavigation();
  
    //criando variável de contador começando em 0
    const [contadorLikes, setContadorLikes] = useState<number>(0);
    const incrementarContadorLike = () =>  setContadorLikes(contadorLikes + 1);
    
    const [contadorDeslikes, setContadorDeslikes] = useState<number>(0);
    const subtrairContadorLike = () =>  setContadorLikes(contadorLikes - 1);
       

    return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Olá, seja bem vindo(a)!!!{'\n'} 
        Seu total de Likes é: {contadorLikes}
      </Text>

      <View style={{ flexDirection: 'row' }}>
          <Button
            title="Like"         
            onPress={incrementarContadorLike}
            color="green"
          />
          <Button
            title="Deslike"         
            onPress={subtrairContadorLike}
            color="red"
          />
      </View>

    </View>
    );
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
  export default Ola;