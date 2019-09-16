import React,{ Component } from 'react'
import {
    View,Text,Button
} from 'react-native';
import { Icon } from 'native-base';
import HeaderComponent from '../customComp/header.component';
// import {Header, Icon, Left,Button, Right, Body, Title} from 'native-base';
// import { Header } from 'react-native-elements';
// import styles from './styles';

class RouteComponent extends Component {

    static  navigationOptions =({navigation})=>({
        drawerIcon:({tintColor})=>{<Icon name='ios-notifications' style={{fontSize:24,color:tintColor}}/>}
    })
    constructor(){
        super();
    }



    render() {
        return (
            <View>
                <HeaderComponent name = 'Araksha' navigation={this.props.navigation}/>
                <View>
                    <Text>Main Component</Text>
                    <Button
                        onPress={()=>this.props.navigation.toggleDrawer()}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"/>
                </View>
            </View>
            
        );
     }
}

export default RouteComponent