import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = ({ children, style }) => {
    return (
        <View style={{...styles.inputContainer, ...style}}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    inputContainer: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 2
        },
        shadowRadius: 6,
        shadowOpacity: .26,
        backgroundColor: 'white',
        elevation: 3,
        padding: 20,
        borderRadius: 10
    },
})
