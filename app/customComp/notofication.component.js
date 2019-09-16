import React,{ Component } from 'react'
import {
View,StyleSheet,TouchableNativeFeedback,Text
} from 'react-native';
import {Icon,} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

class NotificationCompartment extends Component {

    constructor(){
        super();
    }

    render() {
        const {count} = this.props
        const beacon = <Text style = {styles.beacon}>{count<=99?count:'99+'}</Text>;
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <View style={styles.container}>
                    <Icon name='ios-notifications' style={styles.icon}/>
                    {
                      count > 0?beacon:<View/>  
                    }
                    
                </View>
            </TouchableOpacity>
        );
     }
}

const styles = StyleSheet.create({
    container:{
        width:40,
        height:40,
        borderRadius:50,
        backgroundColor:'#B80707',
        alignItems:'center',
        justifyContent:'center',
        position: 'relative'
    },
    icon:{
        color:'#fff'
    },
    beacon:{
        position: 'absolute',
        fontSize:8,
        borderRadius:6,
        zIndex:5,
        top:5,
        right:5,
        backgroundColor:'#ADB202',
        padding:3

    }
});

export default NotificationCompartment