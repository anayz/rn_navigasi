import React, {Component} from 'react';
import {
    StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, Alert
} from 'react-native';

export default class Masuk extends Component {
    render() {
      return (
          <View style={styles.container}>
            <Image 
                style={{width:100,height:100}}
                source={require('./a.jpg')} />
            <TextInput
                style = {styles.inputBox}
                placeholder="Telepon atau Email"
            />
            <TextInput
                style = {styles.inputBox}
                placeholder="Password"
                secureTextEntry={true}
            />
                <Button
                onPress ={() =>{this.props.navigation.navigate('Welcome')}}
                style ={{marginTop:70, flexDirection:'row',justifyContent:'space-between'}}
                title="                    Masuk                   "
                color="#B0C4DE"
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: 'white'
	},

	inputBox:{
		width: 250,
		fontSize: 13,
		color: 'black'
    },
    button: {
        width: 250,
		height: 40,
		alignItems: 'center',
		backgroundColor: 'blue',
		marginVertical: 10,
		paddingHorizontal: 60,
        flexDirection : 'row', 
        justifyContent : 'space-between'
    }
});