import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ShowAllScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>ShowAllScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Center vertically
        alignItems: 'center',     // Center horizontally
    },
    text: {
        fontSize: 24,
        color: 'black',
    },
});
