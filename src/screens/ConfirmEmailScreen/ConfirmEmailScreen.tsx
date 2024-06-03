import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import styles from './confEmail';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('Bar');
    }

    const onSignIn = () => {
        navigation.navigate('SignIn');
    }

    const onResendPressed = () => {
        console.warn("Resend");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>

                <CustomInput
                    placeholder="Enter your confirmation code"
                    value={code}
                    setValue={setCode}
                    secureTextEntry={false}
                />

                <CustomButton
                    text="Confirm"
                    onPress={onConfirmPressed}
                />

                <CustomButton
                    text="Resend code"
                    onPress={onResendPressed}
                    type="SECONDARY"
                />

                <CustomButton
                    text="Back to Sign In"
                    onPress={onSignIn}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
};

export default ConfirmEmailScreen;
