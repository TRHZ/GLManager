import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

const Authentication = () => {
    return (
        <SafeAreaView style = {styles.root}>
            <SignInScreen />
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