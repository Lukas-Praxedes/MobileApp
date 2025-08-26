import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React,{useState, useEffect} from 'react';

export default function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('***********');

  return (
    <View style={styles.container}>
      <Text>Meu app funciona!!</Text>
      <StatusBar style="auto" />
      <Button title='Aumentar' onPress={() => setCount(count + 1)} />
      <Button title='Diminuir' onPress={() => setCount(count - 1)} />
      <Button title='Alterar nome' onPress={() => setName('Segredo revelado.')} />
        <View style={{marginTop:20}}>
          <Text>Contador: {count}</Text>
          <Text>Nome: {name}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
