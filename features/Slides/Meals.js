import {useEffect , useState} from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, Image, TextInput, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import MealCard from '../Cards/MealCard';
import { searchMeals } from '../../services/MealsServices';


const {width , height} = Dimensions.get('window')

export default function Meals() {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        searchMeals({}).then(res => {
            setMeals(res.data);
        })
    }, [])
    
    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }
    
    return (
        <View style={{height: "100%" , width, paddingTop: 15}} >    
            <Text style={styles.title}>Our Meals</Text>
            <View style={styles.search_bar}>
            
            </View>
            <ScrollView style={{flex: 1,maxHeight : height - 310 , marginTop: 15 }}>
                {meals.map(meal =>(
                    <MealCard meal={meal} />
                ))}
            </ScrollView>    
        </View>
    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        marginLeft: 15
    },
    search_bar: {
        height: 100,
        padding: 15,
        backgroundColor: "#fff",
        shadowColor: "#a1a0a0",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3,
        borderColor: "#a9a9a95e",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginTop: 15
    },

});