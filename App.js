import { StatusBar } from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Your course goal!'/>
                <Button title="Add Goal"/>
            </View>
            <View style={styles.golasContainer}>
                <Text>List of goals...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'green'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        paddingLeft: 20,
        marginRight: 8
    },
    golasContainer: {
        flex: 5
    }

});
