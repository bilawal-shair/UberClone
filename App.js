import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./store"
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './screens/MapScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store} >
      
      <NavigationContainer >
      <SafeAreaProvider>
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1}}>
          
        <Stack.Navigator>
          <Stack.Screen component={HomeScreen}  name ={'HomeScreen'} options={{headerShown: false}}/>
          <Stack.Screen component={MapScreen}   name ={'MapScreen'}  options={{headerShown: false}}/>
        </Stack.Navigator>
        </KeyboardAvoidingView>
       </SafeAreaProvider>
      </NavigationContainer>
     
    </Provider>

  );
}

