import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListarEstudante from "./estudante/ListarEstudante";

const Stack = createNativeStackNavigator()

const RoutesCrud = ()=> {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='ListarEstudante' 
                component={ListarEstudante} 
                options={{title:'Listar Estudantes'}}/>
        </Stack.Navigator>
    )
}

export default RoutesCrud