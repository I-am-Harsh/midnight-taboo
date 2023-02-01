import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Home = ({navigation}) => {
    const startGame = () => {
        navigation.navigate('Options')
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.header}>
				Welcome to Midnight Taboo
			</Text>
			<View style={styles.buttons}>
				<TouchableOpacity style={styles.button} onPress = {() => startGame()}>
					<Text style={{textAlign : 'center'}}>
						Start a new game
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "wheat",
		alignItems: "center",
		justifyContent: "center",
	},
	header : {
		fontSize : '20px'
	},	
	buttons : {
		justifyContent : 'center',
		flexDirection : 'row'
	},
	button : {
		backgroundColor : 'green',
		width: '100%'
	}
});


export default Home;