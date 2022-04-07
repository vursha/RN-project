/* eslint-disable keyword-spacing */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
import React from 'react';
import {View,Text} from 'react-native';
import { useSelector } from 'react-redux';
//import  Ionicons from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';


export default function OrderCompleted(){
    const items = useSelector(state => state.cartReducer.selectedItems.items)
    console.log("items:", items)
    const restaurantName = useSelector(state => state.cartReducer.selectedItems.restaurantName)
    const total = items?.map((item => Number(item.price))).reduce((prev,curr)=>prev+curr,0);

    const totalINR = total?.toLocaleString("en", {
        style:"currency",
        currency:"INR",
    }); 
    return(
        <View style={{flex:1,backgroundColor:"white", marginTop:50}}>
           
            <LottieView style={{
                height:100,
                alignSelf:"center",
                marginBottom : 50,
                
             }}
            source={require('../Images/animations/check-mark.json')}
            autoPlay
            speed={0.5}
            loop={false}
           />
            <Text style={{fontSize:20,fontWeight:"bold",margin:20}}>Your Order at {restaurantName} has been placed for ₹{totalINR}</Text>
            <LottieView 
                style={{ height:200,alignSelf:"center"}}
                source={require("../Images/animations/cooking.json")}
                autoPlay
                speed={0.5}
                loop={true}
            />
            <View style={{marginTop:120,alignItems:"center",fontSize:20}}>
                <Text style={{fontSize:20,marginRight:20}}>Thank You!!!</Text>
                <Text style={{fontSize:30}}>Visit Again 🙏 </Text>
            </View>
        </View>
    );
};