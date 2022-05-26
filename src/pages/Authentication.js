import { useState, useEffect } from 'react'
import { StyleSheet, Text,Image, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SecureStore from 'expo-secure-store';
import Logo from '../assets/icons/logo.svg'
import { useFonts } from 'expo-font';
import Login from '../features/Authentication/Login';
import Register from '../features/Authentication/Register';
export default function Auhentication({ navigation }) {

    const [fragment, setFragment] = useState('login')

    useEffect(() => {
        const result = SecureStore.getItemAsync('token');
        result.then(token => {
            if (token != null) {
                navigation.navigate('Home')
            }
        })
    }, [])
    

    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.auth}>
            <StatusBar style='light' />
            <View style={styles.auth_top}>
                <Image style={styles.auth_top_background} source={require('../assets/background.png')} />
                <Logo />
                <View style={{position: 'relative'}}>
                    <View style={styles.underline} ></View>
                    <Text style={styles.title} >Welcome To Marhaba !</Text>
                </View>
            </View>

            {fragment === "login" &&
                <Login setFragment={setFragment} navigation={navigation} />
            }

            {fragment === "register" &&
                <Register setFragment={setFragment}  />
            }

        </View>
    );

}

const styles = StyleSheet.create({
    auth: {
        height: "100%"
    },
    auth_top: {
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',      
        backgroundColor: "#262626",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    title: {
        color: '#ECECEC',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20,
        fontFamily: 'Poppins-Bold'
    },
    auth_top_background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
    },
    underline : {
        position: 'absolute',
        bottom: -5,
        height: 8,
        borderRadius: 30,
        left: '50%',
        transform: [{translateX: -195}],
        width: 200,
        backgroundColor: "#C69048"
    }
});