import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DetailsScreen from "./DetailsScreen"
import HomeScreen from "./HomeScreen"

const Stack = createNativeStackNavigator()

const Routes = ()=> {
    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
        </Stack.Navigator>
    )
}

export default Routes