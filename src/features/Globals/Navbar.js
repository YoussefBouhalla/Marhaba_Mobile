import { useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import LogoLong from '../../assets/icons/logoLong.svg';
import SearchIcon from '../../assets/icons/search.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import HomeIcon from '../../assets/icons/home.svg';
import BasketIcon from '../../assets/icons/basket.svg';
import CartIcon from '../../assets/icons/cart.svg';


export default function Navbar({slides, currentSlideIndex, goToSlide, setCurrentSlideIndex}) {


    const changeNavigation = (index) => {
        return () => {
            goToSlide(index);
            setCurrentSlideIndex(index)
        }
    }
    // loading Poppins fonts
    const [loaded] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }
    
    return (
        <View style={styles.navbar}>  

            {/* <View style={styles.top_navbar}>
                <LogoLong />
                <View style={styles.search_icon} >
                    <SearchIcon />
                </View>
            </View> */}

            <View style={styles.bot_navbar} >
                {slides.map((_,index) => (
                    <Pressable key={index} onPress={changeNavigation(index)} style={{...styles.navbar_item , borderBottomWidth: currentSlideIndex === index ? 3 : 0 , backgroundColor: currentSlideIndex === index ? '#a9a9a911' : 'transparent'}} >
                        {
                            index === 0 ?
                                <HomeIcon/> :
                            index === 1 ?
                                <BasketIcon/> :
                            index === 2 ?
                                <ProfileIcon/> 
                            :   <CartIcon />
                        }
                    </Pressable>
                ))}
            </View>       
        </View>
    );

}

const styles = StyleSheet.create({
    navbar: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 60,
        backgroundColor: "#fff",
        borderBottomColor: "#a9a9a95e",
        borderBottomWidth: 1
    },
    top_navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 10 ,
        paddingRight: 10
    },
    search_icon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a9a9a95e',
        width: 40,
        height: 40,
        padding: 5,
        borderRadius: 999
    },
    bot_navbar: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    navbar_item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#C69048',
    }
    
});