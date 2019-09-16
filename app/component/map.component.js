import React,{ Component } from 'react'
import {
View,Text, StyleSheet, Dimensions
} from 'react-native';
import HeaderComponet from '../customComp/header.component';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import {Icon} from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import styles from './styles';
let { width, height } = Dimensions.get('window');

class MapComponent extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity  style={styles.drawerButton}>
                    <View style={styles.drawerButtonView}>
                        <Icon name='menu' style={styles.icon}/>
                        <Text>indika</Text>                        
                    </View>
                </TouchableOpacity>

                <View style={styles.mapContainer}>
                    
                    <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                        />
                    
                </View>
            </View>
                
        );
     }

    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative'
        
    },
    mapContainer: {
      ...StyleSheet.absoluteFillObject,
      height: this.height,
      width: this.width,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    drawerButton:{
        position:'absolute',
        height:15,
        width:15,
        top:20,
        left:20,
        zIndex:20
    },
    icon:{
      color:'#000',
      fontSize:35
    },
    drawerButtonView:{
        flex:1,
        flexDirection:'row',
        position:'absolute',
        top:20,
        left:0,
        height:60,
        width: width,
        backgroundColor:'#FFF',
        margin:10,
        padding:10,
        borderRadius:5,
        justifyContent: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    // height: this.height,
    //   width: this.width,
      
    },
   });

export default MapComponent;