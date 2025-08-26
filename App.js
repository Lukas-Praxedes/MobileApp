import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [filme, setFilme] = useState('leitura');
  const [estado, setEstado] = useState('Carregando...');

  if (filme === 'leitura') {

  return (
    <View style={styles.container}>
      {filme === 'leitura' ? (
        <Text style={styles.header}>Olá mundo00000000000</Text>
      ) : filme === 'assistido' ? (
        <Text>Filme assistido!</Text>
      ) : (
        <Text>{estado}</Text>
      )}

      <TouchableOpacity onPress={() => setFilme('assistido')}>
        <Text>Mudar para Assistido</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
  else{
        <View style={styles.container}>
      {filme === 'leitura' ? (
        <Text style={styles.header}>Olá mundo</Text>
      ) : filme === 'assistido' ? (
        <Text>Filme assistido!</Text>
      ) : (
        <Text>{estado}</Text>
      )}

      <TouchableOpacity onPress={() => setFilme('leitura')}>
        <Text>Mudar para Leitura</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    textAlign: 'center',
    margin: 10,
  },

});
}
