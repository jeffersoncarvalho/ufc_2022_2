import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeEstudante from "./estudante/HomeEstudante";
import CriarEstudante from "./estudante/CriarEstudante";
import ListarEstudante from "./estudante/ListarEstudante";
import EditarEstudante from "./estudante/EditarEstudante";


const Stack = createNativeStackNavigator()

const RoutesCrud = ()=> {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeEstudante' 
                component={HomeEstudante} 
                options={{title:'Home'}}/>
            <Stack.Screen 
                name='CriarEstudante' 
                component={CriarEstudante} 
                options={{title:'Criar Estudante'}}/>
            <Stack.Screen 
                name='ListarEstudante' 
                component={ListarEstudante} 
                options={{title:'Listar Estudantes'}}/>
            <Stack.Screen 
                name='EditarEstudante' 
                component={EditarEstudante} 
                options={{title:'Editar Estudante'}}/>
        </Stack.Navigator>
    )
}

export default RoutesCrud