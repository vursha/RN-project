/* eslint-disable no-trailing-spaces */
/* eslint-disable react/react-in-jsx-scope */

import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

const Drawer = createDrawerNavigator();
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from '../redux/reducers/store';
import RootNavigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from './DrawerView';
import Home from './Home';
import Items from './Items';
import OrderCompleted from './OrderCompleted';

const store = configureStore();


export default function DrawerNavi() {
  return (
     <ReduxProvider store={store}>
    <NavigationContainer>
    <Drawer.Navigator screenOptions={{headerShown:false}} 
     drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Drawnavi" component={RootNavigation}/>
       <Drawer.Screen name="Home" component={Home}/> 
      <Drawer.Screen name="Items" component={Items}/>
       <Drawer.Screen name="OrderCompleted" component={OrderCompleted}/> 
     
    </Drawer.Navigator>
    </NavigationContainer>
     </ReduxProvider>
  );
};