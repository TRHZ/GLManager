import React from "react";
import { StyleSheet, StatusBar, View, Text, ImageBackground } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../../screens/SettingsScreen/SettingsScreen";
import ShowAllScreen from "../../screens/ShowAllScreen/ShowAllScreen";
import LowStockScreen from "../../screens/LowStockScreen/LowStockScreen";
import SearchScreen from "../../screens/SearchScreen/SearchScreen";
import HomeScreen from '../../screens/HomeScreen/HomeScreen';



const BottomBar = () => {
    const Tab = createBottomTabNavigator();
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                            size = focused ? size + 8 : size + 5;
                        } else if (route.name === 'All') {
                            iconName = focused ? 'list' : 'list-outline';
                            size = focused ? size + 8 : size + 5;
                        } else if (route.name === 'Low') {
                            iconName = focused ? 'alert-circle' : 'alert-circle-outline';
                            size = focused ? size + 8 : size + 5;
                        } else if (route.name === 'Search') {
                            iconName = focused ? 'search' : 'search-outline';
                            size = focused ? size + 8 : size + 5;
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';

                        }
                        return <Ionic name={iconName} size={size} color={color} />
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#234f1e',
                    inactiveTintColor: 'black',
                    showLabel: false,
                }}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="All" component={ShowAllScreen} />
                <Tab.Screen name="Low" component={LowStockScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
    );
};

export default BottomBar;