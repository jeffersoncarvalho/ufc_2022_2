import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListarEstudante from './estudante/ListarEstudante';
import CriarEstudante from './estudante/CriarEstudante';
import HomeEstudante from './estudante/HomeEstudante';

const Stack = createNativeStackNavigator()

const RoutesCrud = ()=> {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeEstudante' 
                component={HomeEstudante} 
                options={{title:'Estudante Home'}}/>
            <Stack.Screen 
                name='ListartEstudante' 
                component={ListarEstudante} 
                options={{title:'Listar Estudantes'}}/>
            <Stack.Screen 
                name='CriarEstudante' 
                component={CriarEstudante} 
                options={{title:'Criar Estudante'}}/>
        </Stack.Navigator>
    )
}

export default RoutesCrud