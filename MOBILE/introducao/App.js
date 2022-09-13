import { StyleSheet, Text, View } from 'react-native';
//import OlaMundo from './components/OlaMundo'
//import Estudante from './components/Estudante'
//import Professor from './components/Professor';
//import Cena from './components/strangerthings/Cena';
//import Personagem from './components/strangerthings/Personagem';
//import Contador from './components/estados/Contador';
import VotaCidade from './components/estados/VotaCidade';

export default function App() {
  return (
    <View style={styles.container}>
      <VotaCidade />
    </View>
  );
}

/*export default function App() {
  return (
    <View style={styles.container}>
      <Cena cena='Mundo Invertido'>
        <Personagem nome='Eleven' />
        <Personagem nome='Vecna' />
        <Personagem nome='Max'  />
        <Personagem nome='Dustin' />
      </Cena>
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <Cena titulo='Mundo Invertido'/>
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <Professor 
        nome='Wladimir' 
        titulacao='Doutor'
        universidade='UFC'
      />
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
