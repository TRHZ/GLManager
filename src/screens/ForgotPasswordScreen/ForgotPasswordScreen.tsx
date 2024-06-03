import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";
import styles from './frgtScreen'; // Importa los estilos desde el nuevo archivo

// Define the types of the routes
type RootStackParamList = {
    NewPassword: undefined;
    SignIn: undefined;
};

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState<string>('');

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const onSendPressed = () => {
        navigation.navigate('NewPassword');
    };

    const onSignIn = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

                <CustomInput placeholder="Username" value={username} setValue={setUsername} />

                <CustomButton text="Send" onPress={onSendPressed} />

                <CustomButton
                    text="Back to Sign In"
                    onPress={onSignIn}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
};

export default ForgotPasswordScreen;
