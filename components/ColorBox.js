import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, colorHex }) => {
    const boxColor = {
        backgroundColor: colorHex
    }
    const textColor = {
        color: parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1 ? "black" : "white"
    }

    return(
        <View style={[styles.box, boxColor]}>
            <Text style={textColor}> {colorName}: {colorHex} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        textAlignVertical: 'center',
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 10,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxText: {
        color: 'white'
    }
})

export default ColorBox;
