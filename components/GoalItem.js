import {Pressable, StyleSheet, Text, View} from "react-native";

function GoalItem(props) {

return(
    <View  style={styles.goalItem}>
    <Pressable android_ripple={{color: '#10c0ea'}} onPress={props.onDeleteItem.bind(this, props.id)}>
            <Text style={styles.goalText}> { props.text }</Text>
    </Pressable>
    </View>
)
};
export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 5,
        backgroundColor: '#73d3ea',
        borderRadius: 10
    },
    goalText: {
        padding: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }

});
