import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SimpleButton from "../Buttons/SimpleButton";
const SlideItem=(props)=>(  
//put your component codes
<View style={[styles.container,{ height:props._h,width:props._w, backgroundColor:props.color,}]}>
<View style={styles.subContainer}>
<View style={styles.leftBlock}>
<Text style={styles.title}>10% Off During COVID 19</Text>
<SimpleButton
title="Get now"
color="#FFFEEB"
_r={50}
_h={40}
_w={100}
/>
</View>

<Image style={styles.image}
source={props.icon}
>

</Image>
</View>

</View>
)
const styles = StyleSheet.create({
    container:{  
        width:315,
        borderRadius:10,
        marginRight:10,
        paddingLeft:10
    },
    leftBlock:{
        width:150

    },
    title:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
       
    },
    subContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20
    },
    image:{
        height:100,
        width:150,
    }

});
export default SlideItem;