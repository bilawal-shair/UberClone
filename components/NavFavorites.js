import { FlatList, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames"

const NavFavourites = () => {

    const data = [
        {
            id: "123",
            icon: "home",
            location: "Home",
            desination: "Code Street, London, UK",

        },
        {

            id: "456",
            icon: "briefcase",
            location: "Work",
            desination: "London Eye, London, UK",


        },
    ];

    return (
        <FlatList

            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (<View style={[tw`bg-gray-200`, { height: 0.5 }]} />)}
            renderItem={({ item: { icon, location, desination } }) => (

                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <Icon

                        style={tw`m-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}


                    />

                    <View>
                        <Text style={tw`font-semibold text-xl`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{desination}</Text>
                    </View>


                </TouchableOpacity>

            )} />
    )
}

export default NavFavourites;