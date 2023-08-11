import {StyleSheet, Text, View} from "react-native";

function GoalItem(props) {
return(
    <View  style={styles.goalItem}>
        <Text style={styles.goalText}> { props.text }</Text>
    </View>
)
};
export default GoalItem;

const styles = StyleSheet.create({
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
