/* eslint-disable react-native/no-inline-styles */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
import * as React from 'react';
import { Text, View, ScrollView,Image } from 'react-native';
const items = [
    {
        image:require('../Images/images/shopping-bag.png'),
        text:"Pick-Up",
    },
    {
        image:require('../Images/images/soft-drink.png'),
        text:"Soft Drinks",
    },
    {
        image:require('../Images/images/bread.png'),
        text:"Bakery Items",
    },
    {
        image:require('../Images/images/fast-food.png'),
        text:"Fast Foods",
    },
    {
        image:require('../Images/images/deals.png'),
        text:"Deals",
    },
    {
        image:require('../Images/images/coffee.png'),
        text:" Coffee & Tea",
    },
    {
        image:require('../Images/images/desserts.png'),
        text:"Desserts",
    },

];
export default function Items(){
  return(
      <View>
      <View style={{flex:0.2,width:20,height:20}}>
        <Text style={{fontSize:20,color:"black"}}>Food Items</Text>
      </View> 
    <View style={{
        //marginTop:5,
        backgroundColor:"skyblue",
        paddingVertical:10,
        paddingLeft:20 ,
        marginBotton:20,
    }}>
         {/* <View style={{flex:0.2,width:20,height:20}}>
        <Text style={{fontSize:20,color:"black"}}>Food Items</Text>
        </View */}
    <ScrollView >
       {items.map((item,index)=>(
       <View key={index} style={{alignItems:"center",marginRight:30}}>
      <Image source={item.image} style={{
          width:200,
          height:200,
          resizeMode:"contain",
      }}/>
      <Text style={{fontSize:13,fontWeight:"900"}}>{item.text}</Text>
      </View>
      ))}
   </ScrollView>
   </View>
   </View>
  );
};