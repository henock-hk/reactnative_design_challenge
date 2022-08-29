import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import { app_color } from "../../assets/colors/Colors";
const ProductItem=(props)=>(  
//put your component codes
<View style={styles.container}>
<View style={styles.header}>
<View style={styles.offContainer}>
<Text style={styles.headerText}>{props.off}</Text>
</View> 
<TouchableOpacity>
<Image
source={props.icon}
></Image>
</TouchableOpacity>
  
</View>
<TouchableOpacity>
<View style={styles.imageBlock}>
<Image style={styles.image} source={props.image}></Image>
</View>
</TouchableOpacity>

<View style={styles.footer}>
<Text style={styles.namelabel}>{props.name}</Text>
<View style={styles.priceBlock}>
<Text style={styles.SpriceLabel}>{props.sPrice}$</Text>
<Text style={styles.RpriceLabel}>${props.rPrice}</Text>
</View>

</View>

</View>
)
const styles = StyleSheet.create({
    container:{  
        width:188,
        height:300,
        borderRadius:10,
        marginRight:10,
        backgroundColor:"#F8F8F8",
        padding:5    
    },
    namelabel:{
        color:app_color.gray,
        marginTop:8,
        marginLeft:10

    },
    SpriceLabel:{
        fontWeight:"bold",
        marginLeft:10,
        fontSize:16

    },
    RpriceLabel:{
        color:app_color.gray,
        marginLeft:2,
        fontSize:12

    },
    priceBlock:{
        flexDirection:"row",
        marginRight:5,
        alignItems:"center",

    },
    image:{
        height:180,
        width:150,
        

    },
    imageBlock:{
        marginTop:15,
        alignItems:"center"
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between"

    },
    headerText:{
       fontWeight:"bold",
       fontSize:13

    },
    offContainer:{
        height:30,
        width:80,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15

    },
    footer:{
        backgroundColor:"white",
        flex:1,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15

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
   

});
export default ProductItem;