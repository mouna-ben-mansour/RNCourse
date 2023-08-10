import { StatusBar } from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Your course goal!'/>
                <Button title="Add Goal"/>
            </View>
            <View style={styles.separator} ></View>
            <View >
                <Text>List of goals...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '80%',
        paddingLeft: 20,
        marginRight: 8
    }

});
