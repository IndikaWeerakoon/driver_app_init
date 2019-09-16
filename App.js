import React, {Component} from 'react';
import {
  View,Text,SafeAreaView, ScrollView, Image, ImageBackground 
} from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems } from "react-navigation";
import {Header,Left,Right,Icon} from 'native-base';

import { Tile } from 'react-native-elements';
import MapComponent from './app/component/map.component';
import RouteComponent from './app/component/route.component';
import HistoryComponent from './app/component/history.component';

const CustomerDrawerComponent = (props)=>(
  <SafeAreaView style={{flex:1,flexDirection:'column'}}>
  {/* source={require('./assert/bgDrawer2.jpg')} */}
      <ImageBackground  style={{flex:2,flexDirection:'row',backgroundColor:"#F1305C"}}>
        <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
          <Image source={require('./assert/driver.png')} style={{height:50,width:50}}/>
        </View>
        <View style={{flex:5,alignItems:'flex-start',justifyContent:'center'}}>
          <Text style={{fontSize:16,fontWeight:'bold',color:'#D6D6D6'}}>Driver Application</Text>
          <Text style={{color:'#B1B1B1',fontStyle:'italic'}}>Locate Childern</Text>
        </View>
      </ImageBackground >
      <View style={{flex:7}}>
        <ScrollView >
          <DrawerItems {...props}/>
        </ScrollView>
      </View>
     
   </SafeAreaView>
);

const DrawerNavigator = createDrawerNavigator(
  {
   Map:{
      screen: MapComponent,
      navigationOptions:{drawerIcon:({tintColor})=>(<Icon name='map' style={{fontSize:24,color:tintColor}} />)}
    },
    Route: {
      screen: RouteComponent,
      navigationOptions:{
        title:'My Route',
        drawerIcon:({tintColor})=>(<Icon name='compass' style={{fontSize:24,color:tintColor}} />)}
    },
    
    History: {
      screen: HistoryComponent,
      navigationOptions:{
        title:'History',
        drawerIcon:({tintColor})=>(<Icon name='ios-stopwatch' style={{fontSize:24,color:tintColor}} />)}
    }
  },
  {
    contentComponent: CustomerDrawerComponent,
    contentOptions: {
      activeTintColor: '#0073DF',
    },
    defaultNavigationOptions:{
      headerTintColor: '#222222',
      activeTintColor:'#0073DF'
    }
  }
);

const App = createAppContainer(DrawerNavigator);

export default App