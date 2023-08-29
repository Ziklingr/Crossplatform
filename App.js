import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enskat, setEnskat] = useState('')
  const [krona, setKrona] = useState(0)
  
  const calculate = () => {
    const result = enskat.replace(',', '.') * 11.85
    setKrona(result)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Euros</Text>
      <TextInput 
      placeholder='Enter enskat'
      keyboardType='decimal-pad'
      value={enskat}
      onChangeText={text => setEnskat(text)}
      style={styles.field}
      
      />
      <Text style={styles.field}>Krona</Text>
      <Text style={styles.field}>{krona.toFixed(2)}</Text>
      <Button title='Kalkuleit' onPress={calculate}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  field: {
    marginBottom: 10,
  }
});
