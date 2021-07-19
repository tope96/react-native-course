import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({route}) => {

    const { paletteName, palette } = route.params

    return (

        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={<Text>{paletteName}</Text>}
                data={palette}
                keyExtractor={item => item.hexCode}
                renderItem={({item}) => (
                    <ColorBox colorHex={item.hexCode} colorName={item.colorName}/>
                )}
            />
        </View>

    );

};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    headText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});


export default ColorPalette;
