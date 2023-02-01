import { Button, SliderBase, StyleSheet, Text, Touchable, View } from "react-native";
import SliderNativeComponent from "react-native/Libraries/Components/Slider/SliderNativeComponent";

const GameOption = ({navigation}) => {

    const startGame = () => {
        navigation.navigate('GameScreen');
    }

    return(
        <View>
            <View>
                <Text>
                    Total time per round
                </Text>
            </View>
            <View>
                <Button onPress={() => startGame()} title='Begin'/>
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