import React from "react";
import { Text, View } from "react-native";
import { styles } from '../../assets/styles/Login3Style';
import c_googleIcon from '../../assets/icons/c_google_25.png';
import c_facebookIcon from '../../assets/icons/c_facebook_25.png';
import b_prevIcon from '../../assets/icons/b_prev.png';
import b_nextIcon from '../../assets/icons/b_next.png';
import SocialButton from "../../Components/Buttons/SocialButton";
import { TextInput } from 'react-native-paper';
import SimpleButton from "../../Components/Buttons/SimpleButton";
import PrevButton from '../../Components/Buttons/CustomButtonIcon';
import { app_color } from '../../assets/colors/Colors';
const Login3Container = ({ navigation }) => (
    //put your component codes
    <View style={styles.mainBlock}>
        <View style={styles.title_block}>
            <Text style={styles.welcome_title}>Log in Page</Text>
        </View>

        <View style={styles.social_block}>
            <SocialButton
                title="Google"
                _h={60}
                _w={160}
                icon={c_googleIcon}
            />
            <SocialButton
                title="Facebook"
                _h={60}
                _w={160}
                icon={c_facebookIcon}
            />
        </View>
        <View style={styles.orBlock}>
            <View style={styles.orLign}></View>
            <Text style={styles.orText}>or</Text>
            <View style={styles.orLign}></View>
        </View>

        <View style={styles.inputBlock}>
            <Text style={styles.labelInput}>Email</Text>
            <TextInput
                mode="outlined"
                outlineColor={app_color.gray}
                activeOutlineColor={app_color.themeColor2}
                theme={{ roundness: 10 }}
            ></TextInput>

            <Text style={styles.labelInput}>Password</Text>
            <TextInput

                mode="outlined"
                outlineColor={app_color.gray}
                activeOutlineColor={app_color.themeColor2}
                theme={{ roundness: 10 }}
                secureTextEntry
                right={<TextInput.Icon name="eye" color={app_color.themeColor} />}
            ></TextInput>
        </View>

        <View style={styles.forgotBlock}>
            <View>
                <Text style={styles.forgotLabel}>Remember me</Text>
            </View>
            <Text style={styles.forgotLabel}>forget password?</Text>
        </View>

        <View style={styles.buttonBlock}>
            <SimpleButton
                title="Log in"
                styleText="bold"
                _h={50}
                _r={10}
                color={app_color.themeColor2}
            />
        </View>

        <View style={styles.signupBlock}>
            <Text style={styles.forgotLabel}>Don't have an account?</Text>
            <Text style={styles.signupLabel}>Sign up</Text>
        </View>

        <View style={styles.nextBlock}>

            <PrevButton
                title="Prev"
                top={20}
                color={app_color.themeColor2}
                icon={b_prevIcon}
                _h={50}
                _w={100}
                _m={10}
                clic={() => navigation.navigate('login2')}
            ></PrevButton>

            <PrevButton
                title="Next"
                top={20}
                color={app_color.themeColor2}
                icon={b_nextIcon}
                _h={50}
                _w={100}
                _m={10}
                clic={() => navigation.navigate('login4')}
            ></PrevButton>

        </View>

    </View>
)
export default Login3Container;