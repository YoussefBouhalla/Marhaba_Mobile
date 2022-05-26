import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import List from '../Lists/MealsList/List';
import MealsSearch from '../Search/MealsSearch';



const {width} = Dimensions.get('window')

export default function Meals({navigation}) {
    
    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }
    
    return (
        <View style={{height: "100%" , width, paddingTop: 15}} >    
            <Text style={styles.title}>Our Meals</Text>
            {/* Search Section */}
            <MealsSearch />
            {/* Scrollable Section */}
            <List navigation={navigation} />
        </View>
    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        marginLeft: 15,
        marginBottom: 15
    }
});