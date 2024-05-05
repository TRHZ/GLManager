import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButton from "../../components/SocialSignInButton";
import { useNavigation } from "@react-navigation/native";


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
    }

    const onSignIn = () => {
        navigation.navigate('SignIn');
    }

    const onTermsOfUsePressed = () => {
        console.warn("Terms of Use");
    }

    const onPrivacyPressed = () => {
        console.warn("Privacy");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>

                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                    secureTextEntry={false}
                />

                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                    secureTextEntry={false}
                />

                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                <CustomInput
                    placeholder="Confirm password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry={true}
                />

                <CustomButton
                    text="Register"
                    onPress={onRegisterPressed}
                />

                <Text style={styles.text}>
                    By registering , you confirm that you accept our {' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>
                        Terms of Use
                    </Text>{' '}
                    and {' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>
                        Privacy Policy
                    </Text>
                </Text>

                <SocialSignInButton />

                <CustomButton
                text="Have an account? Sign In"
                onPress={onSignIn}
                type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        color: 'black',
        alignItems: 'center',
        padding: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'grey',
        fontSize: 12,
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    }
});

export default SignUpScreen;