import React from "react";
import { Image, View } from "react-native";
import { TouchableOpacity,StyleSheet, Text } from "react-native";
const CustomButtonIcon=(props)=>(  
//put your component codes
<View>
<TouchableOpacity
style={[styles.social,{backgroundColor:props.color,marginTop:props.top,height:props._h,width:props._w,margin:props._m}]}
onPress={props.clic}
>
<Text style={[styles.textButton,{color:props.textColor,}]}>{props.title}</Text>
<Image
source={props.icon}
></Image>
</TouchableOpacity>
</View>

)
const styles = StyleSheet.create({
  
    social:{
      borderRadius:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:'center',
      padding:15
    },
    textButton:{
        
        paddingRight:10,
       alignItems:"center",
        flex:1
    },
    image:{
      width:20
    }
  
  });
  
export default CustomButtonIcon;