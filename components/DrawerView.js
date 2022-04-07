/* eslint-disable react-native/no-inline-styles */
/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
import React from 'react';
import { View, StyleSheet ,Image, ImageBackground} from 'react-native';
import { Title, Caption, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import { useSelector } from 'react-redux';
 import  Ionicons  from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
 import Login from './Login';
// import {MaterialCommunityIcons} from '@react-native-vector-icons';

  function DrawerContent(props) {
     
    const navigation = useNavigation();
   
    const handleSignOut = () => {
     navigation.navigate("Login"); 
    };
      
    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                
                <View style={styles.drawerContent}>
                  
                    <View>
                        <ImageBackground style={{flex:0.7,width:300,height:300}}
                        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmyUE-L01G84ZjR0CMG1INWsIqfi2C6Rq6Ng&usqp=CAU"}}
                        />
                    </View>

                     <Drawer.Section style={styles.drawerSection}>
                      
                        <DrawerItem 
                             icon={({size}) => (
                                <Ionicons 
                                    name="home"
                                    size={size}
                                    color="black"
                                    onPress={() => { props.navigation.closeDrawer(); navigation.navigate('Home'); }}
                                />
                            )}
                            
                            label="Home"
                            onPress={() => { props.navigation.closeDrawer(); navigation.navigate('Home'); }}
                        /> 
                        <DrawerItem 
                           icon={({size}) => (
                            <Ionicons 
                            name="fast-food" 
                            size={size} 
                            color="black" 
                            onPress={() => { props.navigation.closeDrawer(); navigation.navigate('Items'); }}
                            />
                        )}
                            label="FoodItems"
                            onPress={() => { props.navigation.closeDrawer(); navigation.navigate('Items');}}
                           
                        />
                        </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Ionicons 
                            name="log-out-outline"
                            size={size}
                            color={color}
                            onPress={() => handleSignOut()}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => handleSignOut()}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    drawerSection: {
      marginTop: 15,
      marginLeft:10,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

  export default DrawerContent;