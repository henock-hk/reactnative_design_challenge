import React from "react";
import { ScrollView, Text } from "react-native";
import { View,Image } from "react-native";
import { styles } from '../../assets/styles/HomeStyle';
import IconContainer from "../../Components/Utils/IconContainer";
import b_closeIcon from '../../assets/icons/b_close.png';
import offIcon from '../../assets/icons/off.png';
import b_searchIcon from '../../assets/icons/b_search.png';
import b_loveIcon from '../../assets/icons/lov_stik.png';
import SlideItem from "../../Components/Utils/SlideItem";
import ProductItem from "../../Components/Utils/ProductItem";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CategoriesItems from "../../Components/Utils/CategoriesItems";



const HomeShopContainer = ({navigation}) => {
const categories = ['g_watch', 'g_chirt', 'g_shoes', 'g_bag','g_trouser','g_dress','g_kimono'];
return(
    //put your component codes
    <View style={styles.mainBlock}>
        <View style={styles.headerBlock}>
            <IconContainer
            clic={() => navigation.navigate('login4')}
                _h={40}
                _w={40}
                _r={8}
                icon={b_closeIcon}
            />

            <IconContainer
                _h={40}
                _w={40}
                _r={8}
                icon={b_searchIcon}
            />

        </View>
       
        <View style={styles.helloBlock}>
            <View style={{ flexDirection: "row",alignItems:"center" }}>
                <Text style={styles.hello_title}>Hello Henock</Text>
                <Image
                    source={b_loveIcon}
                ></Image>
            </View>
            <Text style={styles.subTitle}>Lets gets somethings?</Text>

        </View>

        <View style={styles.slideBlock}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <SlideItem
            _h={170}
            _w={310}
            color="#F36F34"
            icon={offIcon}
        />
        <SlideItem
            _h={170}
            _w={310}
            color="#1F7EE1"
            icon={offIcon}
        />

        </ScrollView>


        </View>

        <View style={styles.categoryTitleBlock}>
        <Text style={styles.titleCategorie}>Top categories</Text>
        <Text style={styles.r_titleCategorie}>SEE ALL</Text>

        </View>

      <CategoriesItems/>

    </View>
)
}
export default HomeShopContainer;