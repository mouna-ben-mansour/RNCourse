import {Button, StyleSheet, TextInput, View, Modal, Image} from "react-native";
import {useState} from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [isVisibleModal, setisVisibleModal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <View style={styles.modalView}>
                    <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Add Goal" onPress={()=> {
                        props.onAddGoalHandler(enteredGoalText);
                        setEnteredGoalText('')
                    }} color='#345ce5' />
                    <Button title="Hide" onPress={props.onHide} color='red'/>
                </View>
                </View>
            </View>
        </Modal>
    )
}
export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '80%',
        padding: 10,
        color: 'white',
        backgroundColor: '#899fea'

    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: '#6784e7',
        flexDirection: 'column',
        gap: 15,
        borderRadius: 20,
        padding: 50,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 5
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }

});