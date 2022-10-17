import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'

const Drawer = createDrawerNavigator();

const RoutesDrawer = ()=> {
    return (
        <Drawer.Navigator> 
                <Drawer.Screen name='HomeScreen' component={HomeScreen} options={{title:'Home'}}/>
                <Drawer.Screen name='DetailsScreen' component={DetailsScreen} options={{title:'Detalhes'}}/>
        </Drawer.Navigator>
    )
}

export default RoutesDrawer
