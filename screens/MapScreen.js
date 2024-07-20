import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map"
import NavigateCard from "../components/NavigateCard";
import tw from "tailwind-react-native-classnames";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RideOptionsCard from "../components/RideOptionsCard";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";




const MapScreen = () => {

    const Stack = createNativeStackNavigator();
    const navigation = useNavigation()

    return (
        <SafeAreaView>

            <TouchableOpacity 
            onPress={()=>navigation.navigate('HomeScreen')}
            style={tw` bg-gray-400 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
                <Icon name="menu"/>
            </TouchableOpacity>



            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>

                <Stack.Navigator>

                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={{ headerShown: false }} />

                </Stack.Navigator>
            </View>
        </SafeAreaView>
    );

};

export default MapScreen

const styles = StyleSheet.create({})