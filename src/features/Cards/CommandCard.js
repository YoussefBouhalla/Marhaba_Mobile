import { StyleSheet, View, Text,  Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import LocationIcon from '../../assets/icons/location.svg'

export default function CommandCard() {

    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }
    
    return (
        <View style={styles.commands_list_item}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{...styles.title, marginTop: 0, marginLeft: 0}}>Command N° 1</Text>
                <Text style={{...styles.title, marginTop: 0, marginLeft: 0, ...styles.price_tag}}>13$</Text>
            </View>

            <Text style={styles.command_text}>2x Pizza Pepperoni - 3x caesar salad</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    commands_list_item: {
        backgroundColor: "#fff",
        marginTop: 15,
        padding: 15,
        shadowColor: "#a1a0a0",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3,
        borderColor: "#a9a9a95e",
        borderWidth: 1,
        borderRadius: 8
    },
    price_tag: {
        color: '#fff',
        backgroundColor: '#C69048',
        borderRadius: 999,
        paddingHorizontal: 20,
        height: 30
    },
    location_container: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#C69048",
        alignItems: 'center',
        paddingBottom: 6,
        borderRadius: 999, 
        marginTop: 10
    },
    title: {
        marginLeft: 15,
        marginTop: 15,
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },
    command_text:{
        fontSize: 14,
        marginTop: 10,
        color: "#969696",
        fontFamily: 'Poppins-Regular'
    },
});