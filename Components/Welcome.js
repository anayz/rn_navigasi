import React,{Component}from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default class Welcome extends Component{
	redirect()
	{
		Alert.alert("This Button is ready")

	}
	render(){
		return(
				<View style={styles.container}>
					<Text style={warna.yoi}> Welcome:)</Text>
					<Text style={warna.yoi}>  Ana Yuni Zhafira </Text>
                    <Text style={salon.iya}> Nama    ana yuni zhafira </Text>
                    <Text style={salon.iya}> Kelas    XI RPL 4 </Text>
                    <Text style={salon.iya}> Absen   05 [Lima] </Text>
                    <Text style={salon.iya}> SMK Telkom Purwokerto Student </Text>
					<Text style={{ marginBottom : 100}}></Text>
					<Button title="					Sebelumnya					" color="#FFA500" onPress ={() => {this.redirect()}}/>
					<Button title="					Selanjutnya					" color="pink" onPress ={() => {this.redirect()}}/>
				</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
});
const warna = {
	yoi : {
		color : "purple",
		fontSize : 20,
		fontWeight : 'bold',
		textAlign:'center',
		marginBottom : 10,
	}
}
const salon = {
	iya : {
		color : "purple",
		fontSize : 14,
	}
}