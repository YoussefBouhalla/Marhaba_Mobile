import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
export default function ProgressBar({status}) {
    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <>
            <View style={styles.progress_bar}>

                {
                    status === 'packaged' ?
                    <View style={{...styles.progress_indicator, left: -5}}></View>
                    : status === 'delivering' ?
                    <View style={{...styles.progress_indicator, left: "50%", transform: [{translateX: -20}]}}></View>
                    :
                    <View style={{...styles.progress_indicator, right: -5}}></View>
                }

                <View style={styles.progress_outer_stripe}>
                    <View style={{...styles.progress_inner_stripe, width: status === 'packaged' ? "25%" : status === 'delivering' ? "75%" : "100%" }}></View>
                </View>

                <View style={{...styles.progress_point, backgroundColor: "#C69048"}}>
                    <View style={styles.progress_middle_point}>

                    </View>
                </View>

                <View style={{...styles.progress_point, backgroundColor: "#C69048"}}>
                    <View style={styles.progress_middle_point}>

                    </View>
                </View>
                
                <View style={{...styles.progress_point, backgroundColor: "#C69048"}}>
                    <View style={styles.progress_middle_point}>

                    </View>
                </View>

            </View>

            <View style={styles.texts_bar}>
                <Text style={styles.status_text}>Packaged</Text>
                <Text style={styles.status_text}>Delivering</Text>
                <Text style={styles.status_text}>Delivered</Text>
            </View>
        </>
    );

}

const styles = StyleSheet.create({
    progress_bar: {
        height: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center'
        
    },
    progress_point: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
        borderRadius: 999
    },
    progress_middle_point: {
        width: 15,
        height: 15,
        borderRadius: 999,
        backgroundColor: "#fff"
    },
    progress_indicator : {
        position: 'absolute',
        
        width: 40,
        height: 40,
        borderRadius: 999,
        backgroundColor: "#c68f4885"
    },
    progress_outer_stripe : {
        position: 'absolute',
        width: "100%",
        borderRadius: 999,
        height: 10,
        backgroundColor: "#AFADAD"
    },
    progress_inner_stripe :{
        height :"100%",
        borderRadius: 999,
        backgroundColor: "#C69048"
    },
    texts_bar: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center'
    },
    status_text : {
        fontFamily: 'Poppins-Medium'
    }

});