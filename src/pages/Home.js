import { useState, useRef , useEffect } from 'react'
import { StyleSheet, View, FlatList, Dimensions, BackHandler, Alert } from 'react-native';
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

export default function HomePage({navigation}) {

    const ref = useRef(null)
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const backAction = () => {
        Alert.alert("Discard changes?", "Are you sure you want to exit?", [
          {
            text: "NO",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", backAction);
        }   
    }, []);

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
                renderItem={({item}) => ( <Slider Component={item.component} navigation={navigation}  /> )}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    
});