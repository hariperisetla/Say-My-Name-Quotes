import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  // Text,
  View,
  FlatList,
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { ThemeProvider, Button, createTheme } from "@rneui/themed";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import axios from "axios";

import { Text } from "@rneui/themed";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_500Medium_Italic,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

const theme = createTheme();

function HomeScreen({ navigation }) {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  // const [fonts] = useFonts({ Poppins_400Regular });

  // if (!fonts) {
  //   return null;
  // }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      fetchQuotes();
      setRefreshing(false);
    }, 2000);
  }, []);

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.breakingbadquotes.xyz/v1/quotes"
      );
      if (response.status === 200) {
        setQuote(response.data);
        setLoading(false);
        return;
      } else {
        throw new Error("failed to fetch");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const onPress = () => {
    fetchQuotes();
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: "#032202", flex: 1, justifyContent: "center" }}
    >
      <View
        style={{
          // padding: 20,
          // justifyContent: "center",
          // alignItems: "center",
          margin: 2,
          padding: 0,
          // flex: 1,
        }}
      >
        {loading ? (
          <ActivityIndicator size="large" color="#369457" />
        ) : (
          <FlatList
            numColumns={1}
            keyExtractor={({ index }) => index + 1}
            data={quote}
            contentContainerStyle={
              {
                // flexGrow: 1,
                // justifyContent: "center",
                // backgroundColor: "",
              }
            }
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({ item }) => (
              <View>
                <View
                  style={{
                    // alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#369457",
                    padding: 30,
                    margin: 3,
                    // borderWidth: 2,
                    borderRadius: 50,
                  }}
                >
                  <Text style={{ textAlign: "left" }}>
                    <FontAwesome name="quote-left" size={50} />
                  </Text>
                  <Text
                    style={{
                      // fontFamily: "Poppins_400Regular",
                      fontFamily: "Poppins_600SemiBold",
                      fontSize: 20,
                      // fontSizeAdjust: "inherit",
                      // fontWeight: 700,
                      textTransform: "capitalize",
                      lineHeight: 55,
                    }}
                  >
                    {item.quote}
                  </Text>
                  <Text
                    style={{
                      paddingTop: 10,
                      fontSize: 20,
                      textAlign: "right",
                      fontFamily: "Poppins_500Medium_Italic",
                      color: "#0D3E10",
                    }}
                  >
                    - {item.author}
                  </Text>
                </View>
                {/* <View>
                  <TouchableOpacity
                    onPress={onPress}
                    style={{
                      borderRadius: 50,
                      backgroundColor: "#45BD6F",
                      paddingHorizontal: 10,
                      paddingVertical: 15,
                      marginHorizontal: 3,
                      marginVertical: 8,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: "Poppins_700Bold",
                        textAlign: "center",
                      }}
                    >
                      Random Quote
                    </Text>
                  </TouchableOpacity>
                </View> */}
              </View>
            )}
          />
          // quote.map((q, key) => (
          //   <View key={key}>
          //     <Text>{q.quote}</Text>
          //     <Text>{q.author}</Text>
          //   </View>
          // ))
        )}
      </View>
      <View>
        <TouchableOpacity
          onPress={onPress}
          style={{
            borderRadius: 50,
            backgroundColor: "#45BD6F",
            paddingHorizontal: 10,
            paddingVertical: 15,
            marginHorizontal: 3,
            marginVertical: 8,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_700Bold",
              textAlign: "center",
            }}
          >
            Random Quote
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View>
      <Text>About Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerShown: false,
        tabBarActiveTintColor: "#369457",
        tabBarInactiveTintColor: "#1F6032",
        tabBarStyle: {
          backgroundColor: "#032202",
          // paddingTop: 0,
          // borderTopWidth: 0,
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
        name="About"
        options={{
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
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium_Italic,
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <NavigationContainer>
        {/* <Text style={{ fontFamily: "Poppins_400Regular" }}>Home Font</Text> */}
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
