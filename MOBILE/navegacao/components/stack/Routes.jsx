import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

const Routes = ()=> {
    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{title:'Home'}}/>
            <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{title:'Detalhes'}}/>
        </Stack.Navigator>
    )
}

export default Routes