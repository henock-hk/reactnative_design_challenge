import {StyleSheet} from 'react-native'
import { app_color } from '../colors/Colors'
export  const styles = StyleSheet.create({
    mainBlock: {
      flex: 1,
      backgroundColor: app_color.white,
      padding:30
    },
    title_block:{
        marginTop:50,
        justifyContent:"center",
        alignItems:"center"

    },
    welcome_title:{
      fontWeight:'bold',
      fontSize:24,
      
    },
    social_block:{
        marginTop:40,
        flexDirection:"row",
        
        
    },
    inputBlock:{
      marginTop:20,
    },
    labelInput:{
      fontSize:14,
      marginTop:15,
      fontWeight:"bold"
    },
    input_login:{
      
      height:50,
      marginTop:5,
      borderRadius:10,
      
  
    },
    forgotBlock:{
      marginTop:15,
      flexDirection:"row",
      justifyContent:"space-between"
    },
    forgotLabel:{
      fontWeight:"bold"
    },
    signupLabel:{
      color:app_color.themeColor2,
      fontWeight:"bold",
      marginLeft:5

    },
    buttonBlock:{
      marginTop:10,
    },
    signupBlock:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      marginTop:15

    },
   
    orBlock:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:15,
      alignItems:"center"
    },
    orText:{
      color:app_color.themeColor,
      fontWeight:"bold"
    },
    orLign:{
      borderBottomColor: app_color.gray,
      borderBottomWidth: 0.5,
      flexDirection:"row",
      flex:1,
      margin:7,
      
    },
    nextBlock:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    }
  
  
  });
  