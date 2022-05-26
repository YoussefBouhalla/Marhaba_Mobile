import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import ProgressBar from '../UI/ProgressBar';

export default function CommandStatus({command}) {

    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }
    
    return (
        <View > 
            <Text style={styles.title}>Command N°1</Text>
            <ProgressBar status="delivered" />  
        </View>
    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        marginLeft: 10,
        marginVertical: 15
    }
});