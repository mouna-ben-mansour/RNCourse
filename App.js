import { StatusBar } from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.dummyText}>My app title</Text>
                <Text style={{margin: 16, borderBottomWidth:2, borderBottomColor: 'red', padding: 16}}>Hello!</Text>
                <Button title='Press me' onPress={()=>Alert.alert('Simple button pressed')}/>
            </View>
            <View style={styles.separator} ></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    dummyText: {
        margin: 16,
        borderWidth:2,
        borderColor: 'blue',
        padding: 16
    },
});
