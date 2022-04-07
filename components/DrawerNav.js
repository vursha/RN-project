/* eslint-disable semi */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
import React from 'react';
import { StyleSheet, Text, View,  TouchableWithoutFeedback  } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';



export const DrawerNav = ({navigation}) => {

    return(
        <View style={styles.container}>
        <View style={styles.navbar}>
           <Ionicons
            name="ios-menu"
            size={26}
            color="black"
            onPress={() => navigation.toggleDrawer()}
          /> 
          <TouchableWithoutFeedback
            onPress={()=> {navigation.closeDrawer(); navigation.navigate("Home")}}
          >
            <View style={styles.navbar}>
              {/* <Image style={{height:35, width:35}} resizeMode="cover" source={require('./Images/logo.png')}/> */}
              <Text style={styles.headertext}>Food Delivery App</Text>
            </View>
            </TouchableWithoutFeedback>



        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex:0.08,
  },
  headertext:{
    color:'black',
    fontSize:25,
    left:45,
    fontWeight:"bold",
  },
  navbar:{
    //flex:1,
    flexDirection:"row",
    backgroundColor:"#BDC3C7",
    width:"auto",
    alignItems:"center",
    paddingLeft:10,
    height:90,
    opacity:0.9,
  

  },

  logout:{
    color:"white",
    marginLeft:15,
    marginRight:5,
  },
});