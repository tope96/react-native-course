import React, {useCallback, useEffect, useState} from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({navigation}) => {

    const URL = "https://color-palette-api.kadikraman.vercel.app/palettes"
    const [palettes, setPalettes] = useState([])
    const fetchPalettes = useCallback(async() =>{
        const response = await fetch(URL)
        if(response.ok){
            const palettes = await response.json()
            setPalettes(palettes)
        }
    }, [])
    useEffect(() => {
        fetchPalettes()
    }, [])


    return(
            <FlatList
                style={styles.list}
                data={palettes}
                keyExtractor={item => item.paletteName}
                renderItem={({ item }) => (
                    <PalettePreview
                        handlePress={() => {navigation.navigate("ColorPalette", {paletteName: item.paletteName, palette: item.colors})}}
                        colorPalette={item}
                    />
                )}
            />
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
        backgroundColor: "white",
    }
})

export default Home;
