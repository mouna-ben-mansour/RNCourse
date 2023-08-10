import {Alert, Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';
import {useState} from "react";

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [goals, setGoals] = useState([]);

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        // recommended way to update state
        setGoals((currentGoals) => [
            ...currentGoals,
            {text: enteredGoalText, id: Math.random().toString()}
        ]);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}/>
                <Button title="Add Goal" onPress={addGoalHandler}/>
            </View>
            <View style={styles.goalsContainer}>
                <Text>List of goals...</Text>
                <FlatList data={goals}
                          renderItem={
                            (itemData) => {
                                return (
                                    <View  style={styles.goalItem}>
                                        <Text style={styles.goalText}> { itemData.item.text }</Text>
                                    </View>
                                )
                            }
                          }
                          keyExtractor={(item, index) => {
                              return item.id
                          }}  />
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
    goalsContainer: {
        flex: 5,
    },
    goalItem: {
        margin: 5,
        padding: 15,
        backgroundColor: '#73d3ea',
        borderRadius: 10
    },
    goalText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }

});
