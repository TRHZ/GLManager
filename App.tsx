import React from "react";
import { StyleSheet, StatusBar, View, Text } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./src/screens/SettingsScreen/SettingsScreen";
import ShowAllScreen from "./src/screens/ShowAllScreen/ShowAllScreen";
import LowStockScreen from "./src/screens/LowStockScreen/LowStockScreen";
import SearchScreen from "./src/screens/SearchScreen/SearchScreen";
import HomeScreen from './src/screens/HomeScreen/HomeScreen';



const App = () => {
  return (
    <View>
      <Text>Hello World</Text>
      <Ionic name="home" />
    </View>
    /* const Tab = createBottomTabNavigator();
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
                            return <Ionic name={iconName} size={size} color={color} />
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
        </> */
    );
};

export default App;

/* import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';

import Navigation from './src/navigation';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';


const Authentication = () => {
    return (
        <SafeAreaView style = {styles.root}>
            <Navigation />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default Authentication;
 */