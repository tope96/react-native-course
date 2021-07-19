import React, {useCallback, useEffect, useState} from 'react';
import { FlatList, StyleSheet, RefreshControl } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({navigation}) => {

    const URL = "https://color-palette-api.kadikraman.vercel.app/palettes"
    const [palettes, setPalettes] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)

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

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true)
        await fetchPalettes()
        setIsRefreshing(false)
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
                refreshing={isRefreshing}
                onRefresh={() => {handleRefresh()}}
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
