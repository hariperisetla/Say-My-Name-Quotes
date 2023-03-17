import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "../screens/HomeScreen";
import CharacterScreen from "../screens/CharacterScreen";
import AboutScreen from "../screens/AboutScreen";
import SettingsScreen from "../screens/SettingsScreen";
// import CharacterStackNavigation from "./CharacterStackNavigation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
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
        {/* <Tab.Screen
        name="Character"
        options={{
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
        component={CharacterScreen}
      /> */}
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
        <Tab.Screen
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
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
