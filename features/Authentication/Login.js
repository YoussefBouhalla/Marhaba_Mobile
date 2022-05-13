import { StyleSheet, Text, TextInput, Pressable, View } from 'react-native';
import { useFonts } from 'expo-font';
import UserIcon from '../../assets/icons/profile.svg';
import KeyHoleIcon from '../../assets/icons/keyhole.svg';

export default function Login({setFragment, navigation}) {

    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    });

    if (!loaded) {
        return null;
    }


    return (
        <View style={styles.login}>
            

            <View style={{display: "flex" , flexDirection: 'column'}}>
                <Text style={styles.title} >login to your account !</Text>

                <View style={styles.input_holder}>
                    <View style={{padding: 5, backgroundColor: '#a9a9a95e' , borderRadius: 999}}>
                        <UserIcon/>
                    </View>
                    <TextInput
                        style={styles.input}
                        // onChangeText={}
                        placeholder='Email'
                    />
                </View>

                <View style={styles.input_holder}>
                    <View style={{padding: 5, backgroundColor: '#a9a9a95e' , borderRadius: 999}}>
                        <KeyHoleIcon/>
                    </View>
                    <TextInput
                        style={styles.input}
                        // onChangeText={}
                        placeholder='password'
                        secureTextEntry={true}
                    />
                </View>
                
                <Pressable  style={styles.btn_login} onPress={() => { navigation.navigate('Home') }} >
                    <Text style={styles.btn_text} >Login</Text>
                </Pressable>

                <Text style={styles.bottom_text} >You don't have an account ? <Text style={styles.register_link_text} onPress={() => { setFragment('register') }}>Create Now!</Text></Text>
            </View>
            
        </View>
    );

}

const styles = StyleSheet.create({
    login: {
        padding: 20,
        flex: 1
    },
    title: {
        fontSize: 16,
        fontFamily: "Poppins-SemiBold",
        color: "#000000",
        marginTop: 20,
    },
    input: {
        height: '100%',
        width: '100%',
        fontSize: 18,
        fontFamily: "Poppins-Medium",
        marginLeft: 10
    },
    input_holder: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        backgroundColor: '#F5F5F5',
        borderStyle: "solid",
        borderColor: "#a9a9a95e",
        borderWidth: 0.5,
        borderRadius: 8,
        marginTop: 20,
        height: 60,
        padding: 10,
        alignItems: 'center',
        shadowColor: "#a1a0a0",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3
    },
    btn_login: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop:40,
        borderRadius: 8,
        backgroundColor: "#C69048",
        height: 60,
        padding: 10,
        shadowColor: "#a1a0a0",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3
    },
    btn_text : {
        color: "#ECECEC",
        fontFamily: "Poppins-SemiBold",
        fontSize: 20,
    },
    bottom_text: {
        marginTop: 15,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center'
    },
    register_link_text:{
        fontFamily: 'Poppins-SemiBold',
        color: '#C69048',
        marginLeft: 5
    }
});