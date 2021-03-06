import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const generateRandomBetween = (min, max, exclude)=> {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    }else {
        return rndNum
    }
}

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'

const GameScreen = ({userChoise}) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoise))

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                <Button title="Lower" onPress={()=>{}}/>
                <Button title="Greater" onPress={()=>{}}/>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})
