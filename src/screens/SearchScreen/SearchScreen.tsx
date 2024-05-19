import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>SearchScreen</Text>
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
