import React from "react";
import { TouchableOpacity,StyleSheet, Text } from "react-native";
const SimpleButton=(props)=>(  
//put your component codes
<TouchableOpacity
style={[styles.button,{ backgroundColor:props.color,borderRadius:props._r, height:props._h,width:props._w}]}
>
<Text style={[styles.textButton,{ color:props.textColor, fontWeight:props.styleText}]}>{props.title}</Text>
</TouchableOpacity>
)
const styles = StyleSheet.create({
  
    button:{
      justifyContent:"center",
      alignItems:"center",
      marginTop:10,
      

    },
    textButton:{
       
        paddingLeft:10,
        paddingRight:10,
    }
  
  });
  
export default SimpleButton;