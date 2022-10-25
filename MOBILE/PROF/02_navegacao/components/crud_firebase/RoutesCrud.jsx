import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListarEstudante from './estudante/ListarEstudante';

const Stack = createNativeStackNavigator()

const RoutesCrud = ()=> {
    return (
        <Stack.Navigator>
            <Stack.Screen name='ListartEstudante' component={ListarEstudante}/>
        </Stack.Navigator>
    )
}

export default RoutesCrud