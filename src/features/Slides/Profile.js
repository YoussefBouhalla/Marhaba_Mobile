import { useState, useRef, useCallback } from 'react';
import { StyleSheet, View, Text, Pressable,Image,  Dimensions, ScrollView, ImageBackground,TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import {LinearGradient} from 'expo-linear-gradient';
import CommandCard from '../Cards/CommandCard';
import MoreIcon from '../../assets/icons/more.svg';
import EditSmallIcon from '../../assets/icons/editSmall.svg';
import BasketSmallIcon from '../../assets/icons/basketSmall.svg';
import BottomSheet,{ BottomSheetView } from '@gorhom/bottom-sheet';
import ProgressBar from '../UI/ProgressBar';

const {width , height} = Dimensions.get('window')

export default function Profile() {

    const [indicator, setIndicator] = useState({at: 'left',position: 0 })

    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)

    const sheetRef = useRef(null);

    const snapPoints = [ 1 , 300  ];

    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    });

    const handleIndicator = (at,position) => {
        return () => {
            setIndicator({at, position});
        }
    }

    const handleBottomSheet = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
        setIsBottomSheetOpen(true);
    }, [])

    if (!loaded) {
        return null;
    }
    
    return (
        <>
            <ScrollView style={{flex: 1,maxHeight : height - 79 }}>
                <View style={{width}}>  

                    {/* profile user Section */}
                    <View style={styles.profile_cover}>
                        <LinearGradient colors={['transparent', '#000000ac']} style={styles.cover_gradient}>
                            <ImageBackground style={{width: "100%", height: "100%", position: 'absolute', zIndex:-1}}  source={{uri: "https://scontent.fcmn1-2.fna.fbcdn.net/v/t1.6435-9/49119891_575649722897523_6474445259194499072_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=e3f864&_nc_eui2=AeEbmS6x8Qb0gFwR_OU7vXfIyxt4XxPJO9jLG3hfE8k72DOkz1f5xpVOZGkwRtLwAfuuoy-uSzI3TF_ULAA_0eRI&_nc_ohc=49MGcfN0PfUAX9xCwn0&_nc_ht=scontent.fcmn1-2.fna&oh=00_AT8paciAzlbautfcx5yyeGXB8ym-uONk6jCVsDpViE9xLA&oe=62AA8DC3"}}></ImageBackground>
                            <View style={styles.profile_image} >
                                <Image style={{width: "100%", height: "100%"}} source={{uri: "https://scontent.fcmn1-1.fna.fbcdn.net/v/t1.6435-9/189291492_1192288864566936_3467608870586354046_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeHwJoP48L0R-AFFAaGd5uKQtT_1J4ILwE21P_UnggvATStdcWG7VurSE4xLGMr4Q9SEuzL8elN7oYiebdyrOXbO&_nc_ohc=mrDUqsf01oQAX_nMD7X&tn=3SSixveo5-B0na2e&_nc_ht=scontent.fcmn1-1.fna&oh=00_AT-hldDsPzVVUhvWF2fJ-vQ_nJ0bxfLQywwqpvq8BkVvUw&oe=62AA31FA"}}></Image>
                            </View>
                            <Text style={styles.profile_username}>Mohammed Kabli</Text>
                            <Text style={styles.profile_role_text}>Client</Text>
                        </LinearGradient>
                    </View> 

                    {/* Actions section */}
                    <View style={styles.profile_actions}>
                        <Pressable style={{...styles.action_button ,...styles.profile_action_button}}>
                            <BasketSmallIcon />
                            <Text style={{...styles.btn_text}}>Order now</Text>
                        </Pressable>

                        <Pressable style={{...styles.action_button ,...styles.profile_edit_button}} >
                            <EditSmallIcon />
                            <Text style={{...styles.btn_text, color: "#ECECEC"}}>Edit Profile</Text>
                        </Pressable>

                        <Pressable style={{...styles.action_button ,...styles.more_button}} onPress={() => handleBottomSheet(1)} >
                            <MoreIcon />
                        </Pressable>
                    </View>

                    {/* seperator */}
                    <View style={{width: width - 30 , height: 1, borderBottomWidth: 1, borderBottomColor: "#d0d0d090", marginTop: 15, marginHorizontal: 15}}></View>

                    {/* tabs section */}
                    <View style={styles.tabs}>
                        <View style={{...styles.tab_indicator, [indicator.at]: indicator.position}}></View>

                        <Pressable style={{...styles.tab, marginRight: 20 }} onPress={handleIndicator('left', 0)}>
                            <Text style={{...styles.tab_text}}>Commands</Text>
                        </Pressable>

                        <Pressable style={{...styles.tab}} onPress={handleIndicator('right', 0)}>
                            <Text  style={{...styles.tab_text}}>History</Text>
                        </Pressable>
                    </View>
                    
                    {/* list */}
                    <View style={styles.commands_list}>
                        <CommandCard />
                        <CommandCard />
                        <CommandCard />
                        <CommandCard />
                    </View>
                </View>
            </ScrollView>

            <BottomSheet
                ref={sheetRef}
                snapPoints={snapPoints}
                enablePanDownToClose
                onClose={() => setIsBottomSheetOpen(false) }
            >
                <BottomSheetView>
                    <ProgressBar />
                </BottomSheetView>
            </BottomSheet>
        </>
    );

}
const styles = StyleSheet.create({
    profile_cover:{
        height: 350,
        backgroundColor: "#000",
        
    },
    profile_image: {
        width: 150,
        height:150,
        overflow: 'hidden',
        backgroundColor: "#01497C",
        borderRadius: 999,
        borderColor: "#fff",
        borderWidth:3,
    },
    profile_username :{
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        color: "#fff",
        marginTop: 15
    },
    profile_role_text: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: "#fff",
        marginBottom: 15
    },
    profile_actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 15
    },
    action_button: {
        flexDirection: 'row',
        height: 40,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#a1a0a0",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3,
    },
    profile_edit_button: {
        flex: 1,
        marginRight: 10,
        backgroundColor: "#C69048"

    },
    profile_action_button: {
        flex: 1,
        marginRight: 10,
        backgroundColor: "#e0e0e0"
    },
    more_button : {
        backgroundColor: "#e0e0e0",
        width: 40
    },
    btn_text :{
        fontFamily: "Poppins-SemiBold",
        fontSize: 14,
        marginLeft: 10,
        height: 23

    },
    title: {
        marginTop: 15,
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },
    commands_list : {
        borderTopRightRadius: 50,
        paddingHorizontal: 15,
        paddingBottom: 15
    },
    cover_gradient: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    tabs: {
        width: 220,
        alignSelf: 'center',
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 15

    },
    tab_text: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold'
    },
    tabs_dot:{
        height: 5 ,
        width: 5,
        backgroundColor:"#000", 
        alignSelf: 'center', 
        marginTop: 3, 
        borderRadius: 999 
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        padding: 5
    },
    tab_indicator: {
        position: 'absolute',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 8,
        width: 100,
        height: "100%",
    }
});