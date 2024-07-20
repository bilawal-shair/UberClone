import { Text, View, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import MapScreen from "../screens/MapScreen";
import MapView, { Marker } from "react-native-maps"
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin, setTravelTimeInformation } from "../slices/navSlice"
import HomeScreen from "../screens/HomeScreen";
import MapViewDirections from "react-native-maps-directions";
//import {GOOGLE_MAPS_APIKEY} from "@env";


const Map = () => {

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination)
  const MapRef = useRef(null);


  useEffect(() => {

    if (!origin || !destination) return;

    MapRef.current.fitToSuplliedMarkers(['origin', 'destination'],{

      edgePadding: {top:50, right:50, bottom:50, left:50},
    });
      

  }, [origin, destination])


  useEffect(()=>{

    if (!origin || !destination) return;


    const getTravelTime = async() =>{

      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
             units=imperial&origins=&{origin.description}&desinations=$
             {destination.description} &key =${apikey}
             
             
            `)

            .then((res) => res.json())
            .then((data)=>{
              dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
            });

    };

    getTravelTime();

    
     },[origin,destination,"apikey"])



  return (
    <MapView

      ref={MapRef}

      style={tw`flex-1 p-8`}
      mapType="mutedStandard"

      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        // latitude:origin.location.lat,
        //longitude: origin.location.lng,
        //latitude:origin.location.lat,
        //longitude:origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}

    >


        {origin && destination &&(
          <MapViewDirections

          origin={origin.description}
          destination={destination.description}
          apikey=""
          strokeWidth={3}
          strokeColor = "black"
          
          
          />
        )}

      {origin?.location && (

        <Marker

             coordinate={{
               latitude:"",
               longitude:"",

              }}
              title ="Origin"
              description={origin.description}
              identifier= "origin"
        />
      )}


      {destination?.location && (

        <Marker

            coordinate={{
             latitude:"",
             longitude:"",

            }}
              title ="Origin"
              description={destination.description}
              identifier= "origin"
        />
      )}

      </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});