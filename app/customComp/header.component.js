import React,{ Component } from 'react'
import {
View
} from 'react-native';
import {Header, Icon, Left,Button, Right, Body, Title} from 'native-base';
import NotificationCompartment from './notofication.component';

const HEADER_COLOR = '#F1305C';
class HeaderComponent extends Component{

    
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    componentDidMount(){
        
    }

    countUpdate(){
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count);
    }

    render() {
        const {navigation} = this.props;
        return (
            <Header style={{backgroundColor:HEADER_COLOR}} >
                <Left>
                    <Button transparent
                            onPress={()=>navigation.toggleDrawer()}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                
                <Body>
                    <Title>{this.props.name}</Title>
                </Body>
                
                <Right>
                    <NotificationCompartment onPress={()=>this.countUpdate()} count={this.state.count}/>
                </Right>
            </Header>
        );
     }
}

export default HeaderComponent;