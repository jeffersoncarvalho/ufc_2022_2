import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Tab = createBottomTabNavigator()

const RoutesTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='HomeScreen' component={HomeScreen}/>
            <Tab.Screen name='DetailsScreen' component={DetailsScreen}/>
        </Tab.Navigator>
    )
}

export default RoutesTab