import React from "react";
import { View, Text, StyleSheet, Pressable, StyleProp, ViewStyle, TextStyle } from "react-native";

type ButtonType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type CustomButtonProps = {
    onPress: () => void;
    text: string;
    type?: ButtonType;
    bgColor?: string;
    fgColor?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor }) => {
    const containerStyle: StyleProp<ViewStyle> = [
        styles.container,
        styles[`container_${type}` as keyof typeof styles],
        bgColor ? { backgroundColor: bgColor } : {}
    ];

    const textStyle: StyleProp<TextStyle> = [
        styles.text,
        styles[`text_${type}` as keyof typeof styles],
        fgColor ? { color: fgColor } : {}
    ];

    return (
        <Pressable onPress={onPress} style={containerStyle}>
            <Text style={textStyle}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },

    container_SECONDARY: {
        borderColor: '#3B71F3',
        borderWidth: 2,
    },

    container_TERTIARY: {},

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_SECONDARY: {
        color: '#3B71F3',
    },

    text_TERTIARY: {
        color: 'gray',
    },
});

export default CustomButton;
