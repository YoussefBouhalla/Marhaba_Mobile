import { StyleSheet, Text, TextInput, Pressable, View, ScrollView, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import UserIcon from '../../assets/icons/profile.svg';
import KeyHoleIcon from '../../assets/icons/keyhole.svg';

const {width, height} = Dimensions.get('screen');
export default function Register({setFragment}) {



    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.register}>
            
            <View style={{display: "flex" , flexDirection: 'column'}}>
                <Text style={styles.title} >create an account !</Text>

                <ScrollView style={{ height: height - 300}} showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={styles.input_holder}>
                            <View style={{padding: 5, backgroundColor: '#a9a9a95e' , borderRadius: 999}}>
                                <UserIcon/>
                            </View>
                            <TextInput
                                style={styles.input}
                                // onChangeText={}
                                placeholder='Username'
                            />
                        </View>
                        <Text style={{...styles.error_text, display: 'flex'}}>error hna error !</Text>
                    </View>

                    <View>
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
                        <Text style={{...styles.error_text, display: 'flex'}}>error hna error !</Text>
                    </View>

                    <View>
                        <View style={styles.input_holder}>
                            <View style={{padding: 5, backgroundColor: '#a9a9a95e' , borderRadius: 999}}>
                                <KeyHoleIcon/>
                            </View>
                            <TextInput
                                style={styles.input}
                                // onChangeText={}
                                placeholder='Password'
                                secureTextEntry={true}
                            />
                        </View>
                        <Text style={{...styles.error_text, display: 'flex'}}>error hna error !</Text>
                    </View>

                    <View>
                        <View style={styles.input_holder}>
                            <View style={{padding: 5, backgroundColor: '#a9a9a95e' , borderRadius: 999}}>
                                <KeyHoleIcon/>
                            </View>
                            <TextInput
                                style={styles.input}
                                // onChangeText={}
                                placeholder='Repeat password'
                                secureTextEntry={true}
                            />
                        </View>
                        <Text style={{...styles.error_text, display: 'flex'}}>error hna error !</Text>
                    </View>

                    <View>
                        <View style={styles.input_holder}>
                            <View style={{padding: 5, backgroundColor: '#a9a9a95e' , borderRadius: 999}}>
                                <UserIcon/>
                            </View>
                            <TextInput
                                style={styles.input}
                                // onChangeText={}
                                placeholder='Phone'
                            />
                        </View>
                        <Text style={{...styles.error_text, display: 'flex'}}>error hna error !</Text>
                    </View>
                    
                    <View>
                        <View style={styles.input_holder}>
                            <View style={{padding: 5, backgroundColor: '#a9a9a95e' , borderRadius: 999}}>
                                <UserIcon/>
                            </View>
                            <TextInput
                                style={styles.input}
                                // onChangeText={}
                                placeholder='Role'
                            />
                        </View>
                        <Text style={{...styles.error_text, display: 'flex'}}>error hna error !</Text>
                    </View>

                    <Pressable  style={styles.btn_register}>
                        <Text style={styles.btn_text} >Register</Text>
                    </Pressable>

                    <Text style={styles.bottom_text} >You already have an account ? <Text style={styles.login_link_text} onPress={() => { setFragment('login') }}> Login Now!</Text></Text>
                </ScrollView>
            </View>
            
        </View>
    );

}

const styles = StyleSheet.create({
    register: {
        padding: 20,
        flex: 3
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
    btn_register: {
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
    login_link_text:{
        fontFamily: 'Poppins-SemiBold',
        color: '#C69048',
        marginLeft: 5
    },
    error_text: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        paddingTop: 5,
        color: '#bd1a1a'
    }
});