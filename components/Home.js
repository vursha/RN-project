/* eslint-disable keyword-spacing */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {View,ScrollView} from 'react-native';
import Categories from './Categories';
import FoodItems,{localFoods} from './FoodItems';

import {DrawerNav} from './DrawerNav';




export default function Home({navigation}){
    const [FoodData,setFoodData] = useState(localFoods);
    return(

        <View style={{flex:1}}>
          <DrawerNav navigation={navigation}/>
         <View style={{backgroundColor:'white',flex:1,top:35}}>

        <ScrollView  showsVerticalScrollIndicator ={true}
            showsHorizontalScrollIndicator={false}>
            <Categories/>
            <FoodItems FoodData={FoodData} navigation = {navigation}/>
        </ScrollView>
        </View>
        </View>

    )
}

