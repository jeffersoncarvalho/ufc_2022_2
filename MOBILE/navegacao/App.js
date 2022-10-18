import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import Routes from './components/stack/Routes';
//import RoutesTab from './components/bottomtab/RoutesTab';
//import RoutesDrawer from './components/drawer/RoutesDrawer';
import RoutesAtivididade03 from './components/atividade03/components/RoutesAtividade03';

export default function App() {
  return (
    <NavigationContainer>
      <RoutesAtivididade03 />
    </NavigationContainer>
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
