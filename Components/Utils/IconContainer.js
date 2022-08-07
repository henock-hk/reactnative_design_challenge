import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";
const IconContainer = (props) => (
    //put your component codes
    
    <TouchableOpacity 
    onPress={props.clic}
    style={[styles.Container, { height: props._h, width: props._w, borderRadius: props._r,marginRight:10, }]}>
        <Image
            source={props.icon}
        ></Image>
    </TouchableOpacity>
    
)
const styles = StyleSheet.create({
    Container: {
        
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3F3F3",
    },

});
export default IconContainer;