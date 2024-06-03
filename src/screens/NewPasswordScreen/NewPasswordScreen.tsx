import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import styles from './nwScreen'; // Importa los estilos desde el nuevo archivo

const NewPasswordScreen = () => {
    const [code, setCode] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');

    const navigation = useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate('Bar');
    }

    const onSignIn = () => {
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

                <CustomInput placeholder="Code" value={code} setValue={setCode} />

                <CustomInput placeholder="Enter your new password" value={newPassword} setValue={setNewPassword} />

                <CustomButton text="Submit" onPress={onSubmitPressed} />

                <CustomButton
                    text="Back to Sign In"
                    onPress={onSignIn}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
};

export default NewPasswordScreen;
