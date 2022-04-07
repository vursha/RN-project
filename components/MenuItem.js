/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable keyword-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable space-unary-ops */
/* eslint-disable quotes */
import React,{useState} from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity} from "react-native";

import { Divider, CheckBox } from "react-native-elements";
//import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from "react-redux";
import { localFoods } from "./FoodItems";


const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    marginRight:30,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItem({restaurantName}) {
  console.log("restaurantName",restaurantName)
  const FoodItem = localFoods.filter( obj => obj.name === restaurantName )
  const FoodItem1 = FoodItem.map(obj => obj.Items)
  // console.log("FoodItem.Items",FoodItem.Items)
  console.log("FoodItem1",typeof(FoodItem1))
  const dispatch = useDispatch();
  const selectItem = (food,check,id) => 
      dispatch ({
        type:"ADD_TO_CART",
        id : id,
        payload:{...food, 
          food:food,                    
          restaurantName : restaurantName,
          checkboxValue: check}
      });
const [local, setlocal] = useState(...FoodItem1)

const handlechecked = (id, food) => {
  
  const temp2 = local.map(obj => {
      if(obj.id === id){
        obj = {...obj,
          checked:!obj.checked
        }
      }
      return obj;
  })
  const temp3 = temp2.map(obj => {
    if(obj.id === id){
      if(obj.checked){
        obj = {...obj,
          count: obj.count + 1
        }
      }else {
        obj = {...obj,
          count: obj.count - 1
        }
      }
      
    }
    return obj;
})
  const check = !food.checked
  selectItem(temp3, check, id)
  setlocal(temp3);
}
   const cartItems = useSelector(
     (state) => state.cartReducer.selectedItems.items
   )
   const isFoodInCart = (food,cartItems) => 
   (cartItems.find((item) => item.title === food.title));
   
   const FoodInfo = (props) => {
    const increase = (id) => {
      const temp3 = local.map(obj => {
        if(obj.id === id){
         
            obj = {...obj,
              count: obj.count + 1, 
              
            }
          
          
        }
        return obj;
      })
      
      setlocal(temp3);
    }
    const decrease = (id) => {
      const temp3 = local.map(obj => {
        if(obj.id === id){
         const temp = obj.count - 1
       
            obj = {...obj,
              count:temp > 0 ? temp : 0,
             
            }
        }
        return obj;
      })
      
      setlocal(temp3);
    }
  
    return (
      <View style={{ width: 220, justifyContent: "space-evenly" ,padding:20}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text> ₹ {props.food.price}</Text>
        {/* <View style={{flex:1,flexDirection:"row"}}>
          <TouchableOpacity onPress={() => increase(props.food.id)}>
            <Text>+</Text>
          </TouchableOpacity>
    
          <Text>Qty: {props.food.count}</Text>
    
          <TouchableOpacity onPress={ () => decrease(props.food.id)}>
            <Text>-</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    )
  };

  return (
    <View>
     
        {local.map((food, index) => (
          <View key={index}>
            {console.log("food :",food )}
            <View style={styles.menuItemStyle}>
               {/* <AntDesign name='checkcircle' checked={false}size={25} color='pink'/> */}
                <CheckBox
                checked={food.checked}
                fillColor="green"
                marginRight={90}
                isChecked = {isFoodInCart(food,cartItems)}
                // onPress ={(checkboxValue) => {selectItem(food); setcheck(!check)} }
                onPress={()=>handlechecked(food.id, food)}
                
              />
              <FoodInfo food={food} />
              <FoodImage food={food} />
              </View>
              <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
            </View>
        ))}
     
    </View>
  );
}




const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 ,marginRight:30}}
    />
  </View>
);
