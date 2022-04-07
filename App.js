// import React from 'react';
// import {Text, View} from 'react-native';
// //import Display from './components/Display';
// //import FlatEx from './components/FlatEx';
// import Slider from './components/Slider';

// const App = () => {
//   return (
//     <View style={{flex: 1}}>
//       <Text>Hii</Text>
//       {/* <Display/> */}
//       {/* <FlatEx/> */}
//       <Slider/>
//     </View>
//   );
// };
// export default App;
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DrawerNavi from './components/Drawer';
//import Home from './components/Home'
import RootNavigation from './components/navigation';

export default function App(){
  return(
   <DrawerNavi/>
  )
}