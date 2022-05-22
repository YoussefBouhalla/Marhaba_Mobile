import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import { useFonts } from 'expo-font';

export default function Item({meal, index, length}) {

    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }
    
    return (
        <View style={{...styles.card, marginTop: index === 0 ? 0 : 15, marginBottom: index === length -1 ? 15 : 0}}>
            <LinearGradient colors={['transparent', '#000000ac']} style={styles.cover_gradient}>
            </LinearGradient>
                <ImageBackground source={{uri: `http://192.168.137.1:4000/meals/${meal.meal_id}` }} style={styles.card_image} />
                <View style={styles.card_tag} >
                    <Text style={{color: "#fff",fontSize: 14, fontFamily: 'Poppins-SemiBold' }}>{meal.type}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: "100%", height:40, paddingHorizontal: 10, marginTop: 150}}>
                    <Text style={styles.card_title} >{meal.title}</Text>
                    <Text style={{...styles.card_title}} >{meal.price}$</Text>
                </View>
                <Text style={styles.card_description} >{meal.description}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 15,
        borderRadius: 8,
        backgroundColor: "#fff",
        overflow: 'hidden',
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
        borderTopWidth: 1
    },
    card_image: {
        position: 'absolute',
        zIndex: -1,
        height: "100%",
        width: "100%"
    },
    card_title : {
        fontSize: 20,
        color: "#fff",
        marginTop: 10,
        fontFamily: 'Poppins-Bold'
    },
    card_description: {
        fontSize: 16,
        color: "#fff",
        fontFamily: 'Poppins-Regular',
        marginTop: 10,
        marginHorizontal: 10,
        paddingBottom: 10
    },
    btn_text : {
        color: "#ECECEC",
        fontFamily: "Poppins-SemiBold",
        fontSize: 16,
    },
    cover_gradient: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        width:"100%",
        height: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    card_tag : {
        position: 'absolute',
        backgroundColor: "#c68f489a",
        right: 10,
        top: 10,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 999
    }
});