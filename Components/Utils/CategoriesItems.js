import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import g_watch from '../../assets/icons/g_watch.png';
import g_chirt from '../../assets/icons/g_chirt.png';
import g_bag from '../../assets/icons/g_bag.png';
import g_dress from '../../assets/icons/g_dress.png';
import g_shoes from '../../assets/icons/g_shoes.png';
import g_trouser from '../../assets/icons/g_trouser.png';
import g_kimono from '../../assets/icons/g_kimono.png';

import w_watch from '../../assets/icons/w_watch.png';
import w_chirt from '../../assets/icons/w_shirt.png';
import w_bag from '../../assets/icons/w_bag.png';
import w_dress from '../../assets/icons/w_dress.png';
import w_shoes from '../../assets/icons/w_shoes.png';
import w_trouser from '../../assets/icons/w_trouser.png';
import w_kimono from '../../assets/icons/w_kimono.png';
import ProductItem from './ProductItem';

import g_heart from '../../assets/icons/g_heart.png';
import r_apple from '../../assets/icons/r_apple.png';
import apple from '../../assets/icons/apple.png';
import gues_gold from '../../assets/icons/gues_gold.png';
import foreign from '../../assets/icons/foreign.png';

import square from '../../assets/icons/square.png';
import shirt_2 from '../../assets/icons/shirt_2.png';
import b_shirt from '../../assets/icons/b_shirt.png';
import bl_shirt from '../../assets/icons/bl_shirt.png';

import gray_nike from '../../assets/icons/gray_nike.png';
import men from '../../assets/icons/men.png';
import nike_black from '../../assets/icons/nike_black.png';
import nike_blue from '../../assets/icons/nike_blue.png';

class CategoriesItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 1,
            products:[]
        }
    }
    categories = [
        { 'id': 1, 'name': 'watch', 'ActivIcon': w_watch, 'defaultIcon': g_watch },
        { 'id': 2, 'name': 'watch', 'ActivIcon': w_chirt, 'defaultIcon': g_chirt },
        { 'id': 3, 'name': 'watch', 'ActivIcon': w_shoes, 'defaultIcon': g_shoes },
        { 'id': 4, 'name': 'watch', 'ActivIcon':w_bag , 'defaultIcon': g_bag },
        { 'id': 5, 'name': 'watch', 'ActivIcon': w_trouser, 'defaultIcon': g_trouser },
        { 'id': 6, 'name': 'watch', 'ActivIcon':w_dress , 'defaultIcon': g_dress },
        { 'id': 7, 'name': 'watch', 'ActivIcon': w_kimono, 'defaultIcon': g_kimono }
    ];

    product_watch = [
        { 'id': 8, 'name': 'Apple watch -M1', 'image': r_apple, 'real_price': 350, 'sold_price': 215 },
        { 'id': 9, 'name': 'Apple watch -M2', 'image': apple, 'real_price': 300, 'sold_price': 150 },
        { 'id': 10, 'name': 'Gues gold watch', 'image': gues_gold, 'real_price': 200, 'sold_price': 140 },
        { 'id': 11, 'name': 'Foreign watch', 'image': foreign, 'real_price': 150, 'sold_price': 100 },
    ];

    product_shirt = [
        { 'id': 12, 'name': 'Chirt red', 'image': bl_shirt, 'real_price': 50, 'sold_price': 45 },
        { 'id': 22, 'name': 'Chirt white', 'image': shirt_2, 'real_price': 40, 'sold_price': 35 },
        { 'id': 31, 'name': 'T-chirt Black', 'image': b_shirt, 'real_price': 40, 'sold_price': 25 },
        { 'id': 42, 'name': 'T-chirt Blue', 'image': bl_shirt, 'real_price': 60, 'sold_price': 45 },
    ];

    product_shoes = [
        { 'id': 13, 'name': 'Nike Red', 'image': men, 'real_price': 50, 'sold_price': 45 },
        { 'id': 14, 'name': 'Nike Black', 'image': men, 'real_price': 40, 'sold_price': 35 },
        { 'id': 15, 'name': 'Nike Gray', 'image': men, 'real_price': 40, 'sold_price': 25 },
        { 'id': 16, 'name': 'Men Shoes', 'image': men, 'real_price': 60, 'sold_price': 45 },
    ];

    componentDidMount=()=>{
        this.setState({products:this.product_watch})
    }

    handlePress = (item) => {
        this.setState({ selected: item })
        this.handleSwitchCategories(item)
    }
    handleSwitchCategories=(item)=>{
       
        if(item===1){
            this.setState({products:this.product_watch})
        }else if(item===2){
            this.setState({products:this.product_shirt})
        }else if(item===3){
            this.setState({products:this.product_shoes})  
        }
    }

    render() {
        return (
            <View>

                <View style={styles.categoryBlock}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {this.categories.map((item) => {
                            return (
                                <TouchableOpacity key={item.id} style={[styles.Container, { height: 55, width: 55, borderRadius: 8, marginRight: 10, backgroundColor: this.state.selected === item.id ? "#F36F34" : "#F3F3F3" }]} onPress={() => this.handlePress(item.id)}>
                                    <Image
                                        source={this.state.selected === item.id ? item.ActivIcon : item.defaultIcon}
                                    ></Image>
                                </TouchableOpacity>
                            )

                        })}

                    </ScrollView>

                </View>

                <View style={styles.productBlock}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    >
                    {
                        this.state.products.map(item=>{
                            return(

                            <ProductItem
                            key={item.id}
                            off="30% OFF"
                            image={item.image}
                            icon={g_heart}
                            name={item.name}
                            rPrice={item.real_price}
                            sPrice={item.sold_price}
                        />

                            )
                        })
                        

                    }
                        
                        
                        
                        
                    </ScrollView>
                </View>

            </View>





        );
    }
}

const styles = StyleSheet.create({
    categoryBlock: {
        marginTop: 15,
        flexDirection: "row",

    },
    Container: {

        justifyContent: "center",
        alignItems: "center",

    },
    productBlock: {
        marginTop: 15,
        flexDirection: "row"

    },
});


export default CategoriesItems;
