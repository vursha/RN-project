/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable keyword-spacing */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import RestaurantDetail from './RestaurantDetail';
import OrderCompleted from './OrderCompleted';
import Slider from './Slider';
import Login from './Login';
import Items from './Items';




export  default function RootNavigation(){
    const Stack = createNativeStackNavigator();

    const screenOption = {
        headerShown : false,
    };
    return(
       
                <Stack.Navigator initialRouteName='Slider'
                screenOptions={screenOption}
                >
                 
                    <Stack.Screen name='Slider' component={Slider}/>
                    <Stack.Screen name='Login' component={Login}/>
                     <Stack.Screen name='Home' component={Home}/>
                     <Stack.Screen name='RestaurantDetail' component={RestaurantDetail}/>
                     <Stack.Screen name="OrderCompleted" component={OrderCompleted}/>
                    <Stack.Screen name='ViewCart' component={Items}/>    
                </Stack.Navigator>
            
    );
} ;