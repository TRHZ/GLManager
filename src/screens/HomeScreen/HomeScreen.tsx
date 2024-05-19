import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../SettingsScreen";
import ShowAllScreen from "../ShowAllScreen";
import LowStockScreen from "../LowStockScreen";
import SearchScreen from "../SearchScreen";
import HomeScreen from "../HomeScreen";


export default function MainScreen() {  // Renombrar a algo distinto
    const Tab = createBottomTabNavigator();
    return (
        <>
            <StatusBar backgroundColor="#54CBFF" barStyle="dark-content" />
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, size, color }) => {
                            let iconName;
                            if (route.name === "Home") {
                                iconName = focused ? "home" : "home-outline";
                                size = focused ? size + 8 : size + 5;
                            } else if (route.name === "Settings") {
                                iconName = focused ? "settings" : "settings-outline";
                                size = focused ? size + 8 : size + 5;
                            } else if (route.name === "All") {
                                iconName = focused ? "list" : "list-outline";
                                size = focused ? size + 8 : size + 5;
                            } else if (route.name === "Low") {
                                iconName = focused ? "warning" : "warning-outline";
                                size = focused ? size + 8 : size + 5;
                            } else if (route.name === "Search") {
                                iconName = focused ? "search" : "search-outline";
                                size = focused ? size + 8 : size + 5;
                            }
                            return <Ionic name={iconName ?? ""} size={size} color={color} />
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: "black",
                        inactiveTintColor: "black",
                        showLabel: false,
                        style: {
                            backgroundColor: '#ffc125',
                            height: 60,
                        },
                    }}>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Settings" component={SettingsScreen} />
                    <Tab.Screen name="All" component={ShowAllScreen} />
                    <Tab.Screen name="Low" component={LowStockScreen} />
                    <Tab.Screen name="Search" component={SearchScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
};

// Ignore this for now HZ
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
