import React from "react";
import { StyleSheet, StatusBar, View, Text, ImageBackground } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomBar from "./src/components/BottomBar/BottomBar";
import Authentication from "./src/components/Authentication/Authentication";



const App = () => {
    const Tab = createBottomTabNavigator();
    return (
            <Authentication />
    );
};

export default App;


