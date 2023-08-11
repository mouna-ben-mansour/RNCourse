import { Button, StyleSheet, Text, TextInput, View,  FlatList} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    function addGoalHandler(enteredGoalText) {
        // recommended way to update state
        setGoals((currentGoals) => [
            ...currentGoals,
            {text: enteredGoalText, id: Math.random().toString()}
        ]);
        hideGoalHandler();
    }

    function deleteGoalHandle(id){
        setGoals((currentGoals) => {
               return currentGoals.filter((goal) => goal.id !== id);
        });
    }

    function startAddGoalHandler(){
        setIsVisible(true);
    }

    function hideGoalHandler(){
        setIsVisible(false);
    }

    return (
        <View style={styles.container}>
            <Button title="Add New Goal" color="#73d3ea" onPress={startAddGoalHandler}/>
            <GoalInput onAddGoalHandler={addGoalHandler} visible={isVisible} onHide={hideGoalHandler}/>
            <View style={styles.goalsContainer}>
                <Text>List of goals...</Text>
                <FlatList data={goals}
                          renderItem={
                            (itemData) => {
                                return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandle} id={itemData.item.id}/>
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


    goalsContainer: {
        flex: 5,
    },

});
