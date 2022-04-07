/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlatEx = () => {
    const [item,setItem] = React.useState([{foods}]);
        const foods = [{
            id:1,
            name:"idli",
            price:' ₹70 ',
          },
          {
            id:2,
            name:"Dosa",
            price: "₹90",
          },
          {
            id:3,
            name:"Chapathi",
            price: "₹100",
          },
          {
            id:4,
            name:"Poori",
            price: "₹70",
          },
          {
            id:5,
            name:"Meals",
            price: "₹120",
          },
          {
            id:6,
            name:"Iddiyappam",
            price: "₹170",
          },
          {
            id:7,
            name:"Paneer",
            price: "₹170",
          },
          {
            id:8,
            name:"Fried Rice",
            price: "₹170",
          },
          {
            id:9,
            name:"Chicken",
            price: "₹170",
          },
    ];
  //   const getItem=(item)=>{
  //    const Id= item.id
  //    alert(Id)
  //  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>flatList</Text>
      <FlatList 
       data={foods}
       renderItem={({item}) => (
         <View style={{flex:1,flexDirection:"row",padding:30,justifyContent:"space-between"}}>
         <Text 
        
         style={{fontSize:24}}>{item.name}</Text>  
        <Text style={{fontSize:24}}> {item.price}</Text>
         </View>  
       )}
       keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FlatEx;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"skyblue",
        paddingTop:40,
        //paddingHorizontal:60
        width:400,
    },
    listName:{
        marginTop:24,
        padding:20,
        backgroundColor:"pink",
        fontSize:44,
        //justifyContent:"space-around"
      },
      listPrice:{
        justifyContent:"flex-end",
        marginLeft:10,
      },
      header:{
          marginTop:20,
          fontSize:20,
          fontWeight:"bold",
          justifyContent:"center",
          alignItems:"center",
          marginLeft:160,

      },
});