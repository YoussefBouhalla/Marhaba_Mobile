import { StyleSheet, View, Text } from 'react-native';

export default function Slider({Component, navigation}) {
    
    return (
        <View>
            <Component navigation={navigation} />
        </View>
    );

}

const styles = StyleSheet.create({

});