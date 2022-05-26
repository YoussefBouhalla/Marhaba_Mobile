import { useState, useEffect } from 'react'
import { StyleSheet, View, Dimensions, Text, SafeAreaView, NativeModules, ImageBackground, Pressable, ScrollView, BackHandler } from 'react-native';
import { useFonts } from 'expo-font';
import {LinearGradient} from 'expo-linear-gradient';
import BackArrowIcon from '../assets/icons/backArrow.svg';
import MoreIcon from '../assets/icons/moreVertical.svg';
import PlusIcon from '../assets/icons/plus.svg';
import MinusIcon from '../assets/icons/minus.svg';
import CartWhiteIcon from '../assets/icons/cartWhite.svg';


const {width, height} = Dimensions.get('window');
const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default function MealsDetail({navigation}) {

    const [counter, setCounter] = useState(0)

    // handling the back button
    const backAction = () => {
        navigation.navigate('Home')
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", backAction);
        }   
    }, []);

    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    const decrementCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    
    return (
        <SafeAreaView style={styles.details}> 

            <View style={styles.header_container}>
                <Pressable style={styles.header_btn}>
                    <BackArrowIcon />
                </Pressable>

                <Text style={styles.header_text}>Meal Details</Text>

                <Pressable style={styles.header_btn}>
                    <MoreIcon />
                </Pressable>
            </View>
            
            <View style={{...styles.card}}>
                <LinearGradient colors={['transparent', '#000000ac']} style={styles.cover_gradient}></LinearGradient>
                <ImageBackground source={{uri: `http://192.168.137.1:4000/meals/7` }} style={styles.card_image} />
                <Text style={styles.card_title} >Pizza Pepperoni</Text>
            </View>

            <View style={{flexDirection: 'row', marginHorizontal: 15, marginVertical: 10,  justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{color: "#262626",fontSize: 30, fontFamily: 'Poppins-ExtraBold' }}>$13,00</Text>
                <Text style={{color: "#a0a0a0",fontSize:16, fontFamily: 'Poppins-Regular' }}>Main Meals</Text>
            </View>

            <View style={{marginHorizontal: 15 , height: 200}}>
                <Text style={{color: "#262626",fontSize: 20, fontFamily: 'Poppins-ExtraBold' }}>Description :</Text>
                <ScrollView >
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sequi nulla hic. Maxime eos velit hic neque enim vero illo, ipsum cupiditate temporibus sunt nobis corrupti in eaque quia itaque.
                    </Text>
                </ScrollView>
            </View>

            <View style={styles.bottom_section}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{flex: 0.5, textAlign: 'right', fontFamily: 'Poppins-Bold'}}>Quantity :</Text>
                    <View style={{...styles.counter_container}}>
                        <Pressable style={{...styles.counter_btn}} onPress={decrementCounter}>
                            <MinusIcon />
                        </Pressable>

                        <Text style={styles.counter_text}>{counter}</Text>

                        <Pressable style={{...styles.counter_btn}} onPress={incrementCounter}>
                            <PlusIcon />
                        </Pressable>
                    </View>
                </View>

                <Pressable style={styles.add_to_cart}>
                    <CartWhiteIcon />
                    <Text style={styles.btn_text}>add to cart</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    details: {
        flex: 1,
        width,
        height
    },
    header_container : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginTop: STATUSBAR_HEIGHT
    },
    header_btn: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: "#a9a9a95e",
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    header_text: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18
    },
    card: {
        flex: 0.7,
        justifyContent: 'flex-end',
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
    card_image: {
        position: 'absolute',
        zIndex: -1,
        height: "100%",
        width: "100%"
    }, 
    card_title : {
        paddingBottom: 15,
        textAlign: 'center',
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
    description_scroll: {
        marginHorizontal: 15,
    },
    description: {
        color: "#696969",
        fontFamily: 'Poppins-Medium',
        fontSize: 16
    },
    bottom_section : {
        width,
        bottom: 0,
        paddingHorizontal: 40,
    },
    add_to_cart:{
        flexDirection: 'row',
        backgroundColor: "#C69048",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:30,
        height: 50,
        shadowColor: "#a1a0a0",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3,
    },
    btn_text: {
        color: "#fff",
        marginLeft: 10,
        fontFamily: 'Poppins-SemiBold'
    },
    counter_container : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: STATUSBAR_HEIGHT,
        marginTop:0
    },
    counter_btn: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#C69048",
        borderRadius: 8,
        shadowColor: "#a1a0a0",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3,
    },
    counter_text: {
        paddingHorizontal: 20,
        fontFamily: 'Poppins-Bold',
        fontSize: 16
    },
});