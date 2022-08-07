import * as React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import c_googleIcon from '../../assets/icons/c_google_25.png';
import c_facebookIcon from '../../assets/icons/c_facebook_25.png';
import c_appleIcon from '../../assets/icons/c_apple_25.png';
import c_twiterIcon from '../../assets/icons/c_twiter_25.png';
import w_prevIcon from '../../assets/icons/w_prev_25.png';
import w_nextIcon from '../../assets/icons/w_next_25.png';
import SimpleButton from '../../Components/Buttons/SimpleButton';
import PrevButton from '../../Components/Buttons/CustomButtonIcon';
import SocialButton from '../../Components/Buttons/SocialButton';
import { TextInput } from 'react-native-paper';
import { styles } from '../../assets/styles/Login2Style';
import { app_color } from '../../assets/colors/Colors';
export default function Login2Container({ navigation }) {
  return (
    <View style={styles.mainBlock}>
      <Text style={styles.welcome_title}>Welcome Back</Text>
      <View style={styles.inputBlock}>
        <Text style={styles.labelInput}>Email</Text>
        <TextInput
          mode="outlined"
          outlineColor='#B0B5C1'
          activeOutlineColor='black'
          theme={{ roundness: 10 }}
        ></TextInput>

        <Text style={styles.labelInput}>Password</Text>
        <TextInput mode="outlined"
          outlineColor='#B0B5C1'
          activeOutlineColor='black'
          theme={{ roundness: 10 }}
          secureTextEntry
          right={<TextInput.Icon name="eye-off" color="#B0B5C1" />}
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

        <View style={styles.noticeBlock}>

          <Text style={styles.noticeText}>Join BisoConcept with your favorite social media account</Text>

        </View>

        <View style={styles.SocialBlock}>
          <SocialButton
            icon={c_googleIcon}
            _h={70}
            _w={70}
          ></SocialButton>
          <SocialButton
            icon={c_facebookIcon}
            _h={70}
            _w={70}
          ></SocialButton>
          <SocialButton
            icon={c_appleIcon}
            _h={70}
            _w={70}
          ></SocialButton>
          <SocialButton
            icon={c_twiterIcon}
            _h={70}
            _w={70}
          ></SocialButton>
        </View>

      </View>
      <View style={styles.nextBlock}>

        <PrevButton
          title="Prev"
          textColor={app_color.white}
          top={20}
          color="black"
          icon={w_prevIcon}
          _h={50}
          _w={100}
          _m={10}
          clic={() => navigation.navigate('login')}
        ></PrevButton>

        <PrevButton
          title="Next"
          top={20}
          color="black"
          textColor={app_color.white}
          icon={w_nextIcon}
          _h={50}
          _w={100}
          _m={10}
          clic={() => navigation.navigate('login3')}
        ></PrevButton>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}


