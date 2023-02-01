import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Animated, {
    useAnimatedStyle,
    withRepeat,
    withSequence,
    withTiming,
} from 'react-native-reanimated';
import { Button as PaperButton } from 'react-native-paper';


const data = [
    {
        mainWord : "Word 1",
        secondaryWords : ['Sec1', 'Sec2', 'Sec3', 'Sec3', 'Sec4']
    },
    {
        mainWord : "Word 2",
        secondaryWords : ['Sec1', 'Sec2', 'Sec3', 'Sec3', 'Sec4']
    },
    {
        mainWord : "Word 3",
        secondaryWords : ['Sec1', 'Sec2', 'Sec3', 'Sec3', 'Sec4']
    },
    {
        mainWord : "Word 4",
        secondaryWords : ['Sec1', 'Sec2', 'Sec3', 'Sec3', 'Sec4']
    }
]

const GameScreen = ({navigation, route}) => {

    const [current, setCurrent] = useState(0);
    const [gameRunning, setGameRunning] = useState(true);
    // const timerCount = route.params.timer;
    let timerCount = 10;
    let timer = null;

    const changeWord = () => {
        if(current + 1 == data.length) return;
        setCurrent(current + 1);
    }

    useEffect(() => {
        // set the timer
        timer = setInterval(
            () => {
                timerCount = timerCount - 1;
                if(timerCount < 10){
                    // console.log(timerCount);
                }
                if(timerCount == 0) {
                    clearInterval(timer);
                    setGameRunning(false);
                }
            }, 
            1000
        );

        return () => {
            clearInterval(timer);
        }
    }, [])

    const showPostActions = () => {
        return(
            <View style={styles.container}>
                <PaperButton icon="replay" mode="contained" onPress={() => console.log('Pressed')}>
                    Play Again
                </PaperButton>
            </View>
        )
    }
    
    const onSwipe = (gestureName, gestureState) => {
        // const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    
        // switch (gestureName) {
        //   case SWIPE_UP:
        //     console.log('red');
        //     break;
        //   case SWIPE_DOWN:
        //     console.log('green');
        //     break;
        //   case SWIPE_LEFT:
        //     console.log('blue');
        //     break;
        //   case SWIPE_RIGHT:
        //     console.log('yellow');
        //     break;
        // }
        changeWord();
    }
     
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    const glowAnimation = useAnimatedStyle(() => ({
        transform: [
            {
                scale: withRepeat(
                    withSequence(
                        withTiming(1, { duration: 1500 }),
                        withTiming(1.2, { duration: 1500 })
                    ),
                    -1,
                    true
                ),
            },
        ],
    }));
    

    return(
        gameRunning ? 
        <GestureRecognizer config={config} 
            onSwipe={(direction, state) => onSwipe(direction, state)}
            style = {styles.container}
        >
            <Animated.View style = {[styles.surface]}>
                <View style = {styles.mainWord}>
                    <Text>
                        {data[current].mainWord}
                    </Text>
                </View>
                <View style = {styles.tabooWords}>
                    {
                        data[current].secondaryWords.map((item, index) => {
                            return(
                                <Text key={index}>{item}</Text>
                            )
                        })
                    }
                </View>
                <Button onPress={changeWord} title = 'Change Question'></Button>
            </Animated.View>
        </GestureRecognizer>
        : 
        showPostActions()
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'wheat',
        padding : 0,
        color : 'white'
    },
    surface: {
        width : '80%',
        height : "80%",
        borderRadius : '20pt',
        borderWidth : '2pt',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex : 10,
        shadowRadius : '2pt',
        backgroundColor : '#CBC3E3'
    },
    mainWord: {
        borderBottomColor : 'black',
        borderBottomWidth : '1pt'
    },
    tabooWords : {

    },
    glowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 8,
        bottom: 0,
        left: 0,
        right: 4,
    },
})

export default GameScreen;