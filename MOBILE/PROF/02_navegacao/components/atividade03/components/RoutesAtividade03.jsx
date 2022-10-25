import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';

import Cadastro from './Cadastro';
import IMC from './IMC';
import Sobre from './Sobre';

import Perfil from './Perfil';
import Resultado from './Resultado';

const Stack = createNativeStackNavigator()

const RoutesAtivididade03 = ()=> {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Cadastro' component={Cadastro} />
                <Stack.Screen name='IMC' component={IMC} />
                <Stack.Screen name='Perfil' component={Perfil} />
                <Stack.Screen name='Resultado' component={Resultado} />
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen name='Sobre' component={Sobre} options={{headerShown:false}}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default RoutesAtivididade03