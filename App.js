import { StyleSheet, View } from 'react-native';
import Authentication from './pages/Authentication';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator>
              <Stack.Screen name="Authentication" component={Authentication} options={{headerShown: false}} /> 
              <Stack.Screen name="Home" component={Home} options={{headerShown: false}} /> 
          </Stack.Navigator>
        </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#F8F4F1',
  },
});
