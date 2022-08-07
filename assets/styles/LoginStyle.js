import {StyleSheet} from 'react-native'
import { app_color } from '../colors/Colors'
export  const styles = StyleSheet.create({
    mainBlock: {
      flex: 1,
      backgroundColor: app_color.white,
      padding:30
    },
    welcome_title:{
      fontWeight:'bold',
      fontSize:24,
      marginTop:50,
    },
    inputBlock:{
      //borderColor:"black",
      //borderWidth:1,
      marginTop:20,
    },
    labelInput:{
      fontSize:17,
      marginTop:15
    },
    input_login:{
      borderWidth:1,
      borderColor:app_color.gray,
      height:50,
      marginTop:5,
      borderRadius:10,
  
    },
    forgotBlock:{
      flexDirection:"row",
      justifyContent:'flex-end'
  
    },
    buttonBlock:{
      marginTop:10,
    },
    orBlock:{
      flexDirection:"row",
      justifyContent:"space-between",
      paddingLeft:50,
      paddingRight:50,
      marginTop:15
    },
    orText:{
      color:app_color.gray
    },
    nextBlock:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    }
  
  
  });
  