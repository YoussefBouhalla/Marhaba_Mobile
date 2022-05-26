import {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import SearchIcon from '../../assets/icons/searchColored.svg';
import ArrowDownIcon from '../../assets/icons/arrowDown.svg';
import ArrowUpIcon from '../../assets/icons/arrowUp.svg';
import FilterIcon from '../../assets/icons/filter.svg';

export default function MealsSearch() {
    
    const [type, setType] = useState(null)

    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    });

    if (!loaded) {
        return null;
    }
    
    return (
        <>
            <View style={styles.input_holder}>
                <SearchIcon />
                <TextInput style={styles.input} placeholder="search for a meal"/>
            </View>
            <View style={styles.price_holder}>
                <View style={{...styles.input_holder, flex: 1, marginRight: 0}}>
                    <ArrowDownIcon />
                    <TextInput style={styles.input} placeholder='Min price'/>
                </View>
                <View style={{...styles.input_holder, flex: 1, marginLeft: 10}}>
                    <ArrowUpIcon />
                    <TextInput style={styles.input} placeholder="Max price"/>
                </View>
            </View>
            <View style={styles.filters_holder}>
                <View style={styles.icon_holder}>
                    <FilterIcon />
                </View>

                <Pressable style={{...styles.filter_button, marginRight: 0 , backgroundColor: type === 'starter' ? "#C69048" : "#a9a9a911"}} onPress={() => setType('starter')} >
                    <Text style={{...styles.filter_text, color: type === 'starter' ? "#fff" : "#000"}}>Starters</Text>
                </Pressable>

                <Pressable style={{...styles.filter_button, backgroundColor: type === 'main' ? "#C69048" : "#a9a9a911"}} onPress={() => setType('main')}>
                    <Text style={{...styles.filter_text, color: type === 'main' ? "#fff" : "#000"}}>Mains</Text>
                </Pressable>

                <Pressable style={{...styles.filter_button, marginLeft: 0,marginRight: 0 , backgroundColor: type === 'dessert' ? "#C69048" : "#a9a9a911"}} onPress={() => setType('dessert')}>
                    <Text style={{...styles.filter_text , color: type === 'dessert' ? "#fff" : "#000"}}>Desserts</Text>
                </Pressable>
                
            </View>
        </>
    );

}

const styles = StyleSheet.create({
    input_holder: {
        height: 50,
        marginHorizontal: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        shadowColor: "#a1a0a0",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3,
    },
    input: {
        fontFamily: 'Poppins-Medium',
        flex: 1,
        fontSize: 16,
        marginLeft: 20
    },
    price_holder: {
        marginTop: 10,
        flexDirection: 'row'
    },
    filters_holder: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 10,

    },
    icon_holder: {
        backgroundColor: "#C69048",
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
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
    filter_button: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: 8,
        marginRight: 10,
        marginLeft: 10
    },
    filter_text: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium'
    }

});