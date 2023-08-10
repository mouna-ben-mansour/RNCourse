import { StatusBar } from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>1</Text>
            </View>

            <View style={{
                flex: 2,
                backgroundColor: 'darkorange',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>2</Text>
            </View>
            <View style={{
                flex: 3,
                backgroundColor: 'green',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 50,
        width: '80%',
        height: 300,
        justifyContent:'space-between',
        alignItems:'center'
    },

});
