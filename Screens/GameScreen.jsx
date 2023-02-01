import { usePreventRemoveContext } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';

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

const GameScreen = ({navigation}) => {


    return(
        <View style = {styles.container}>
            {/* <View style = {styles.surface}>
                <View style = {styles.mainWord}>
                    <Text>
                        This is the main word
                    </Text>
                </View>

                <View style = {styles.tabooWords}>
                    <Text>
                        these are hints
                    </Text>
                </View>
            </View> */}
            {
                data.map((words, index) => {
                    return(
                        <View key={index} style = {[styles.surface, index != 0 && styles.hidden]}>
                            <View style = {styles.mainWord}>
                                <Text>
                                    {words.mainWord}
                                </Text>
                            </View>

                            <View style = {styles.tabooWords}>
                                {
                                    words.secondaryWords.map((item, index) => {
                                        return(
                                            <Text key={index}>{item}</Text>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    )
                })
            }
        </View>
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
    hidden : {
        display : 'none'
    }
})

export default GameScreen;