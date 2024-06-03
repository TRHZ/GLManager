import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SettingsScreen() {
    const [language, setLanguage] = useState("english");

    const toggleLanguage = () => {
        setLanguage(language === "english" ? "spanish" : "english");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {language === "english" ? "Settings Screen" : "Pantalla de Configuración"}
            </Text>
            <TouchableOpacity style={styles.button} onPress={toggleLanguage}>
                <Text style={styles.buttonText}>
                    {language === "english" ? "Switch to Spanish" : "Cambiar a Inglés"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        color: "black",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#3498db",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
