import { useState, useRef } from 'react'
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import Navbar from '../features/Globals/Navbar';
import Home from '../features/Slides/Home';
import Meals from '../features/Slides/Meals';
import Profile from '../features/Slides/Profile';
import Slider from '../features/Globals/Slider';

const {width, height} = Dimensions.get('window');

const slides = [
    {
        id: 1,
        component: Home
    },
    {
        id:2,
        component: Meals
    },
    {
        id:3,
        component: Profile
    },
    {
        id:4,
        component: Profile
    }
]

export default function Auhentication() {

    const ref = useRef(null)
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const updatecurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);

    }

    const goToSlide = (offset) => {
        ref?.current?.scrollToOffset({offset: offset * width})
    }

    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }
    
    return (
        <View style={styles.auth}>            
            <Navbar slides={slides} currentSlideIndex={currentSlideIndex} goToSlide={goToSlide} setCurrentSlideIndex={setCurrentSlideIndex} />
            <FlatList 
                ref={ref}
                onMomentumScrollEnd={updatecurrentSlideIndex}
                pagingEnabled
                data={slides}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => ( <Slider Component={item.component}  /> )}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    
});