import { SliderBase, StyleSheet, Text, Touchable, View } from "react-native";
import { Button } from "react-native-paper";
import SliderNativeComponent from "react-native/Libraries/Components/Slider/SliderNativeComponent";

const GameOption = ({navigation}) => {

    const startGame = () => {
        navigation.navigate('GameScreen', {headerBackVisible : false}, {timer : 20});
    }

    return(
        <View style = {styles.container}>
            <View>
                <Text>
                    Total time per round
                </Text>
            </View>
            <View>
                <Button onPress={() => startGame()}>
                    Begin
                </Button>
            </View>
        </View>
    )
    
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'wheat',
        justifyContent : 'center'
    }
})

export default GameOption;