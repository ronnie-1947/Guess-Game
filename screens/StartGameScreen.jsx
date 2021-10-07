import React, { useState } from 'react'
import { StyleSheet, Text, View, Keyboard, Alert, TouchableWithoutFeedback, Button } from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import Colors from '../constants/colors'

const StartGameScreen = ({onStartGame}) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNum, setSelectedNum] = useState('')


    const numInputHandler = inputTxt => {
        setEnteredValue(inputTxt.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNum = parseInt(enteredValue)

        if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
            Alert.alert('Invalid Number', 'Number has to be in between 1 and 99', [{
                text: 'Okay',
                style: 'cancel',
                onPress: resetInputHandler
            }])
            return
        }

        setConfirmed(true)
        setSelectedNum(chosenNum)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>
                    {selectedNum}
                </NumberContainer>
                <Button onPress={()=>onStartGame(selectedNum)} title="Start game"/>
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start New Game</Text>
                <Card
                    style={{
                        width: 300,
                        maxWidth: '80%',
                        alignItems: 'center',
                    }}>
                    <Text>Enter a Number</Text>
                    <Input
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        maxLength={2}
                        keyboardType='number-pad'
                        style={styles.input}
                        onChangeText={numInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.btnContainer}>
                        <View style={styles.btn}>
                            <Button onPress={resetInputHandler} color={Colors.accent} title="Reset" />
                        </View>
                        <View style={styles.btn}>
                            <Button onPress={confirmInputHandler} title="confirm" color={Colors.primary} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput && confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15
    },

    btn: {
        width: 100,
        maxWidth: '40%'
    },

    input: {
        width: 50,
        textAlign: 'center'
    },

    summaryContainer: {
        marginVertical: 20,
        alignItems: 'center'
    }
})
