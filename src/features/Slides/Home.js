import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

const {width , height} = Dimensions.get('window')
export default function Home() {

    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }
    
    return (
        <View style={{width}} >    
            <Text>Home</Text>    
        </View>
    );

}

const styles = StyleSheet.create({

});