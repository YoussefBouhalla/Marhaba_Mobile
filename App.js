import { StyleSheet, View } from 'react-native';
import Authentication from './src/pages/Authentication';
import Home from './src/pages/Home';
import MealsDetail from './src/pages/MealsDetail';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './src/reducers';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const store = createStore(allReducers);

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <NavigationContainer>
          <View style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen name="Authentication" component={Authentication} options={{headerShown: false}} /> 
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} /> 
                <Stack.Screen name="MealDetails" component={MealsDetail} options={{headerShown: false}} /> 
            </Stack.Navigator>
          </View>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#F8F4F1',
  },
});
