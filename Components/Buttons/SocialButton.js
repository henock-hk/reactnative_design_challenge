import React from "react";
import { Image, View } from "react-native";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { app_color } from "../../assets/colors/Colors";
const SocialButton = (props) => (
  //put your component codes

  <TouchableOpacity>
    <View style={[styles.social,{height:props._h,width: props._w,}]} >
      <Image
        source={props.icon}
      ></Image>
      {
        props.title?
        <Text style={styles.social_text}>{props.title}</Text>:
        null
      }
     
    </View>

  </TouchableOpacity>


)
const styles = StyleSheet.create({

  social: {
    marginTop: 20,
    backgroundColor: "#FDFDFD",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    borderColor: "#B0B5C1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"row",
    margin: 10,
    elevation: 10

  },
  social_text:{
    margin:5,
    color:app_color.themeColor,
    fontWeight:"bold"
  }


});

export default SocialButton;