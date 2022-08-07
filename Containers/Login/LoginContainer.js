import * as React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import w_googleIcon from '../../assets/icons/w_google_25.png';
import w_facebookIcon from '../../assets/icons/w_facebook_25.png';
import w_appleIcon from '../../assets/icons/w_apple_25.png';
import w_twiterIcon from '../../assets/icons/w_twiter_25.png';
import w_nextIcon from '../../assets/icons/w_next_25.png';
import RectangularSocialButton from '../../Components/Buttons/RectangularSocialButton';
import SimpleButton from '../../Components/Buttons/SimpleButton';
import NextButton from '../../Components/Buttons/CustomButtonIcon';
import { styles } from '../../assets/styles/LoginStyle';
import { app_color } from '../../assets/colors/Colors';
export default function LoginContainer({ navigation }) {
    return (
        <View style={styles.mainBlock}>
            <Text style={styles.welcome_title}>Welcome Back</Text>
            <View style={styles.inputBlock}>
                <Text style={styles.labelInput}>Email</Text>
                <TextInput
                    mode="outlined"
                    outlineColor={app_color.gray}
                    activeOutlineColor={app_color.themeColor}
                    theme={{ roundness: 10 }}
                ></TextInput>

                <Text style={styles.labelInput}>Password</Text>
                <TextInput
                    mode="outlined"
                    outlineColor={app_color.gray}
                    activeOutlineColor={app_color.themeColor}
                    theme={{ roundness: 10 }}
                    secureTextEntry
                    right={<TextInput.Icon name="eye-off" color={app_color.gray} />}
                ></TextInput>
            </View>
            <View style={styles.forgotBlock}>
                <Text style={styles.labelInput}>Forgot password?</Text>
            </View>
            <View style={styles.buttonBlock}>
                <SimpleButton
                    color={app_color.themeColor}
                    textColor={app_color.white}
                    _h={50}
                    _r={10}
                    title="Log in">
                </SimpleButton>
                <View style={styles.orBlock}>
                    <Text style={styles.orText}>---------------</Text>
                    <Text style={styles.orText}>OR</Text>
                    <Text style={styles.orText}>---------------</Text>
                </View>

                <RectangularSocialButton
                    title="Join with google"
                    color="black"
                    textColor="#fff"
                    top={20}
                    icon={w_googleIcon}
                />

                <RectangularSocialButton
                    title="Join with Facebook"
                    icon={w_facebookIcon}
                    color="black"
                    textColor="#fff"
                    top={20}
                />


                <RectangularSocialButton
                    title="Join with Apple"
                    icon={w_appleIcon}
                    color="black"
                    textColor="#fff"
                    top={20}
                />


                <RectangularSocialButton
                    title="Join with Twiter"
                    icon={w_twiterIcon}
                    color="black"
                    textColor="#fff"
                    top={20}
                />



            </View>
            <View style={styles.nextBlock}>

                <NextButton
                    title="Next"
                    top={20}
                    textColor={app_color.white}
                    color="black"
                    _h={50}
                    _w={100}
                    icon={w_nextIcon}
                    clic={() => navigation.navigate('login2')}
                ></NextButton>

            </View>

            <StatusBar style="auto" />
        </View>
    );
}

