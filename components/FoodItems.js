/* eslint-disable keyword-spacing */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Text, View, Image, TouchableOpacity,TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//import RestaurantDetail from './RestaurantDetail';
//import Ionicons from 'react-native-vector-icons/Ionicons'
//import AntDesign from 'react-native-vector-icons/AntDesign'




 export const localFoods = [
    {
        name:'Undersea Restaurant',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXw0pqGYwHn2ieksnWU1IoVsu7TQUfvFwsQ&usqp=CAU',
        categories:['Cafe','Bar'],
        price:"$$",
        reviews:1244,
        rating:4.7,
        Items:[
            {
                title:'Dosa',
                id:1,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 70,
                checked:false,
                image:"https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
                title:'Chicken Biryani',
                id:2,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price:130,
                checked:false,
                image:"https://st.depositphotos.com/3147737/4982/i/950/depositphotos_49826809-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg",
            },
            {
                title:'Noodles',
                id:3,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 100,
                checked:false,
                image:"https://drivemehungry.com/wp-content/uploads/2019/09/yaki-udon-udon-noodle-stir-fry-9-720x960.jpg"
            },
            {
                title:'Fried Rice',
                id:4,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price:120,
                checked:false,
                image:"https://www.seriouseats.com/thmb/haHZBlBbdjmY9ffMCzTu8Z3e9xo=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__01__20160206-fried-rice-food-lab-68-807af5859cdd42dfb96bda07f62fb32e.jpg"
            },
            {
                title:'Noodles',
                id:5,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 130,
                checked:false,
                image:"https://drivemehungry.com/wp-content/uploads/2019/09/yaki-udon-udon-noodle-stir-fry-9-720x960.jpg"
            },

        ],
    },
    {
        name:'Thalapakatti restaurant',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OPkDqIY9qprYMiS24nKZczvAnA6Ru9f6Ig&usqp=CAU',
        categories:['Cafe','Bar'],
        price:"$$",
        reviews:1544,
        rating:4.9,
        Items:[
            {
                title:'Dosa',
                id:1,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price:70.50,
                checked:false,
                image:"https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                title:'Chicken Biryani',
                id:2,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 130.50,
                checked:false,
                image:"https://st.depositphotos.com/3147737/4982/i/950/depositphotos_49826809-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg"
            },
            {
                title:'Noodles',
                id:3,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 100.50,
                checked:false,
                image:"https://drivemehungry.com/wp-content/uploads/2019/09/yaki-udon-udon-noodle-stir-fry-9-720x960.jpg"
            },
            {
                title:'Fried Rice',
                id:4,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 120.50,
                checked:false,
                image:"https://www.seriouseats.com/thmb/haHZBlBbdjmY9ffMCzTu8Z3e9xo=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__01__20160206-fried-rice-food-lab-68-807af5859cdd42dfb96bda07f62fb32e.jpg"
            },
            {
                title:'Noodles',
                id:5,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 130.50,
                checked:false,
                image:"https://drivemehungry.com/wp-content/uploads/2019/09/yaki-udon-udon-noodle-stir-fry-9-720x960.jpg"
            },

        ],
    },
    {
        name:'waterfall restaurant',
        image : 'https://b.zmtcdn.com/data/pictures/5/18409005/489bed40fba1ae1cca2e66ca54161e39_featured_v2.jpg',
        categories:['Cafe','Bar'],
        price:"$$",
        reviews:1214,
        rating:4.7,
        Items:[
            {
                title:'Dosa',
                id:1,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 70.50,
                checked:false,
                image:"https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                title:'Chicken Biryani',
                id:2,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price:'₹ 130.50',
                checked:false,
                image:"https://st.depositphotos.com/3147737/4982/i/950/depositphotos_49826809-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg"
            },
            {
                title:'Noodles',
                id:3,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price:100.50,
                checked:false,
                image:"https://drivemehungry.com/wp-content/uploads/2019/09/yaki-udon-udon-noodle-stir-fry-9-720x960.jpg"
            },
            {
                title:'Fried Rice',
                id:4,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 120.50,
                checked:false,
                image:"https://www.seriouseats.com/thmb/haHZBlBbdjmY9ffMCzTu8Z3e9xo=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__01__20160206-fried-rice-food-lab-68-807af5859cdd42dfb96bda07f62fb32e.jpg"
            },
            {
                title:'Noodles',
                id:5,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 130.50,
                checked:false,
                image:"https://drivemehungry.com/wp-content/uploads/2019/09/yaki-udon-udon-noodle-stir-fry-9-720x960.jpg"
            },

        ],

    },
    {
        name:'Holiday Inn restaurant',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-4TkThnebrlU2_PQ48X89iBqmYOuCWP60w&usqp=CAU',
        categories:['Cafe','Bar'],
        price:"$$",
        reviews:1097,
        rating:4.5,
        Items:[
            {
                title:'Dosa',
                id:1,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 70.50,
                checked:false,
                image:"https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                title:'Chicken Biryani',
                id:2,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price:130.50,
                checked:false,
                image:"https://st.depositphotos.com/3147737/4982/i/950/depositphotos_49826809-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg"
            },
            {
                title:'Noodles',
                id:3,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 100.50,
                checked:false,
                image:"https://drivemehungry.com/wp-content/uploads/2019/09/yaki-udon-udon-noodle-stir-fry-9-720x960.jpg"
            },
            {
                title:'Fried Rice',
                id:4,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price:120.50,
                checked:false,
                image:"https://www.seriouseats.com/thmb/haHZBlBbdjmY9ffMCzTu8Z3e9xo=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__01__20160206-fried-rice-food-lab-68-807af5859cdd42dfb96bda07f62fb32e.jpg"
            },
            {
                title:'Noodles',
                id:5,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 130.50,
                checked:false,
                image:"https://drivemehungry.com/wp-content/uploads/2019/09/yaki-udon-udon-noodle-stir-fry-9-720x960.jpg"
            },

        ],
    },
    {
        name:'Turya restaurant',
        image : 'https://images.moneycontrol.com/static-mcnews/2022/03/Noon-interiors_Mumbai-4-1.jpg?impolicy=website&width=770&height=431',
        categories:['Cafe','Bar'],
        price:"$$",
        reviews:9874,
        rating:4.3,
        Items:[
            {
                title:'Dosa',
                id:1,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 70.50,
                checked:false,
                image:"https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                title:'Chicken Biryani',
                id:2,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 130.50,
                checked:false,
                image:"https://st.depositphotos.com/3147737/4982/i/950/depositphotos_49826809-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg"
            },
            {
                title:'Noodles',
                id:3,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price:100.50,
                checked:false,
                image:"https://drivemehungry.com/wp-content/uploads/2019/09/yaki-udon-udon-noodle-stir-fry-9-720x960.jpg"
            },
            {
                title:'Fried Rice',
                id:4,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 120.50,
                checked:false,
                image:"https://www.seriouseats.com/thmb/haHZBlBbdjmY9ffMCzTu8Z3e9xo=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__01__20160206-fried-rice-food-lab-68-807af5859cdd42dfb96bda07f62fb32e.jpg"
            },
            {
                title:'Noodles',
                id:5,
                count:0,
                description:'with butter lettuce , tomato and sauce bechamel',
                price: 130.50,
                checked:false,
                image:"https://drivemehungry.com/wp-content/uploads/2019/09/yaki-udon-udon-noodle-stir-fry-9-720x960.jpg"
            },

        ],
    },

];
//  const UserData = () =>{
//      const[isLoaded,setIsLoaded] = useState(false);
//      const[myData,setMyData] = useState();
//      const getUserData = async () => {
//         try {
//             console.log(Data)
//             axios.post("https://jsonplaceholder.typicode.com/users",{Data})
//             .then(res => {
//               console.log(res.data);
//               const realData = res.data.Data;
//               setMyData(realData);
//               setIsLoaded(false);
//             })

//           } catch (error) {
//             console.log(error);
//      }
//  };
//  useEffect(() =>getUserData(),[]);
function FoodItems({navigation,...props}){
    const [search,setSearch] = React.useState("");
    const handleButtonPress =(item,image) =>{
        // const { title, link } = item
        // this.props.navigation.navigate('Browser', { title, link })
        navigation.navigate("RestaurantDetail", {item,image});
      }
    return(
      <>
       <View style={{margin:5,padding:15,backgroundColor:"powderblue",borderRadius:30}}>
       <TextInput style={{fontWeight:"700",color:"black"}}
            placeholder='search'
            onChangeText={(obj)=>setSearch(obj)}

        />
         </View>
        {props.FoodData.filter((value)=>{
            if(search === ''){
                return value;
            }else if(value.name.toLowerCase().includes(search?.toLowerCase()))
            {
                return value;
            }
        }).map((foods,index) =>(
           <TouchableOpacity
           // key={index}
           activeOpacity={1}
           style={{marginBottom:30}}
           onPress={() => handleButtonPress(foods.name, foods.image) }
           >

                <View style={{marginTop:10,padding:15,backgroundColor:"black"}}>
                    <FoodImage image={foods.image}/>
                    <FoodInfo name={foods.name}
                            rating={foods.rating}
                                />
                </View>
                </TouchableOpacity>

   ))}


  </>
  );
}

const FoodImage = (props) => (
    <>
    <Image source={{uri :props.image}}
    style={{width:'100%', height:180}}
    />
    <TouchableOpacity style={{position:'absolute', right:20, top:20}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#fff'/>
    </TouchableOpacity>
    </>
);

const FoodInfo = (props) => (
    <View style={{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:10,
    }}>
    <View >
    <Text style={{fontSize:15,fontWeight:"bold", color:'white'}}>{props.name} </Text>
    <Text style={{fontSize:12,color:'white'}}>30-45 min</Text>
    </View>
    <Text style={{color:'white'}}>{props.rating}</Text>
    </View>
);

export default FoodItems;

