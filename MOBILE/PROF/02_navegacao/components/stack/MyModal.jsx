import { View, Text, Button } from 'react-native';

const MyModal = (props) => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Isto é um Modal!</Text>
            <View>
                <Button
                    title='Fechar'
                    onPress={() => props.navigation.goBack()}
                />
            </View>
        </View>
    )
}

export default MyModal