import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../CustomButton";

const SocialSignInButton = () => {

    const onSignInGoogle = () => {
        console.warn("Sign In with Google");
    }

    return (
        <View>
            <CustomButton
                text="Sign In with Google"
                onPress={onSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />
        </View>
    )
}

export default SocialSignInButton;