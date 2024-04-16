import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from '../../../assets/images/Logo_1.png'
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign In");
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password");
    }

    const onSignInGoogle = () => {
        console.warn("Sign In with Google");
    }

    const onSignUp = () => {
        console.warn("Create Account");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image 
            source={Logo} 
            style={[styles.logo, {height: height * 0.3}]} 
            resizeMode="contain" 
            />

            <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername} 
            secureTextEntry={false}
            />

            <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword} 
            secureTextEntry={true}
            />

            <CustomButton 
            text="Sign In" 
            onPress={onSignInPressed} 
            />

            <CustomButton 
            text="Forgot password?" 
            onPress={onForgotPasswordPressed} 
            type="TERTIARY" />

            <CustomButton 
            text="Sign In with Google" 
            onPress={onSignInGoogle} 
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
            />
            <CustomButton 
            text="Don't have an account? Create one" 
            onPress={onSignUp} 
            type="TERTIARY" 
            />

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 40,
    },
    logo: {
        width: '70%',
        maxWidth: 500,
        height: 100,
        maxHeight: 200,
        marginBottom: 15,
    },
});

export default SignInScreen;