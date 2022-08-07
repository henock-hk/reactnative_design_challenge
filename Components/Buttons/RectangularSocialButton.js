import React from "react";
import { Image } from "react-native";
import { TouchableOpacity,StyleSheet, Text } from "react-native";
const RectangularSocialButton=(props)=>(  
//put your component codes
<TouchableOpacity
style={[styles.social,{ backgroundColor:props.color, marginTop:props.top}]}
>
<Image
source={props.icon}
></Image>
<Text style={[styles.textButton,{ color:props.textColor}]}>{props.title}</Text>
</TouchableOpacity>
)
const styles = StyleSheet.create({
  
    social:{
      borderRadius:10,
      height:50,
      flexDirection:"row",
      alignItems:"center",
      padding:15
    },
    textButton:{
       
        paddingLeft:70,
        paddingRight:10,
       alignItems:"center",
        flex:1
    },
    image:{
      width:20
    }
  
  });
  
export default RectangularSocialButton;