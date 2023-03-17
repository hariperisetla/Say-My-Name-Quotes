import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import axios from "axios";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CharacterScreen from "./screens/CharacterScreen";
import SettingsScreen from "./screens/SettingsScreen";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_500Medium_Italic,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import CharacterStackNavigation from "./components/CharacterStackNavigation";

//components
// import TabNavigation from "./components/TabNavigation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        // headerShown: false,
        tabBarActiveTintColor: "#369457",
        tabBarInactiveTintColor: "#1F6032",
        tabBarStyle: {
          backgroundColor: "#032202",
          paddingTop: 5,
          // // borderTopWidth: 0,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen
        name="Say My Name"
        options={{
          headerStyle: {
            backgroundColor: "#032202",
          },
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
          },
          headerTintColor: "#369457",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Character"
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#032202",
          },
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
          },
          headerTintColor: "#369457",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="smile" color={color} size={size} />
          ),
        }}
        component={CharacterStackNavigation}
      />
      <Tab.Screen
        name="About"
        options={{
          headerStyle: {
            backgroundColor: "#032202",
          },
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
          },
          headerTintColor: "#369457",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          ),
        }}
        component={AboutScreen}
      />
      {/* <Tab.Screen
        name="Settings"
        options={{
          headerStyle: {
            backgroundColor: "#032202",
          },
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
          },
          headerTintColor: "#369457",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
        component={SettingsScreen}
      /> */}
    </Tab.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium_Italic,
    Poppins_500Medium,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
