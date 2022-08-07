import {StyleSheet} from 'react-native'
import { app_color } from '../colors/Colors'
export const styles = StyleSheet.create({
    mainBlock: {
      flex: 1,
      backgroundColor: app_color.white,
    paddingLeft:15
    },
    headerBlock:{
        marginTop:70,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingRight:15
    },
    helloBlock:{
        marginTop:22
    },
    slideBlock:{
        marginTop:15,
    },
    categoryTitleBlock:{
        marginTop:25,
        flexDirection:"row",
        justifyContent:"space-between",
        marginRight:15

    },
    categoryBlock:{
        marginTop:15,
        flexDirection:"row",

    },
   
    titleCategorie:{
        fontWeight:'bold',

    },
    r_titleCategorie:{
       fontSize:12,
       color:"#F36F34",
       fontWeight:"bold"
    },
    
    hello_title:{
      fontWeight:'bold',
      fontSize:18,
      marginRight:5
    },
    subTitle:{
        color:app_color.gray,
        marginTop:5
    },
   
  
  
  });