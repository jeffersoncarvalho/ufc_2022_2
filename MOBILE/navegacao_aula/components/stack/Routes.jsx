import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DetailsScreen from "./DetailsScreen"
import HomeScreen from "./HomeScreen"
import MyModal from "./MyModal"

const Stack = createNativeStackNavigator()

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Group>
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: 'Home' }} />
                <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{ title: 'Detalhes' }} />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation:'modal'}}>
                <Stack.Screen name='MyModal' component={MyModal} options={{ headerShown: false }}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default Routes