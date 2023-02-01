import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const Home = ({ navigation }) => {
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
				<Button mode="contained" onPress={startGame}>
					New Game
				</Button>		
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