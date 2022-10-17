import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'

const Tab = createBottomTabNavigator();

const RoutesTab = ()=> {
    return (
        <Tab.Navigator>
                <Tab.Screen name='HomeScreen' component={HomeScreen} options={{title:'Home'}}/>
                <Tab.Screen name='DetailsScreen' component={DetailsScreen} options={{title:'Detalhes'}}/>
        </Tab.Navigator>
    )
}

export default RoutesTab
