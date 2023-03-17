import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Linking } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const AboutScreen = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: "#032202", flex: 1, justifyContent: "center" }}
    >
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{ textAlign: "left", color: "#369457", paddingHorizontal: 30 }}
        >
          <FontAwesome name="quote-left" size={50} />
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "#369457",
            paddingVertical: 10,
            paddingHorizontal: 25,
            textAlign: "justify",
            fontFamily: "Poppins_500Medium",
          }}
        >
          Thanks for checking out the App!
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "#369457",
            paddingVertical: 10,
            paddingHorizontal: 25,
            textAlign: "justify",
            fontFamily: "Poppins_500Medium",
          }}
        >
          Say My Name is a simple app idea to create a random quote generator
          with the quotes from the famous TV Show Breaking Bad.
        </Text>

        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "#369457",
            paddingVertical: 10,
            paddingHorizontal: 25,
            textAlign: "justify",
            fontFamily: "Poppins_500Medium",
          }}
        >
          API used for the quotes is from{" "}
          <Text
            style={{
              textDecorationLine: "underline",
              fontWeight: 600,
              fontFamily: "Poppins_700Bold",
              textAlign: "center",
              fontSize: 20,
              color: "#369457",
            }}
            onPress={() => {
              Linking.openURL("https://breakingbadquotes.xyz/");
            }}
          >
            Breaking Bad Quotes API
          </Text>
          {" by "}
          <Text
            style={{
              textDecorationLine: "underline",
              fontFamily: "Poppins_700Bold",
            }}
            onPress={() => {
              Linking.openURL("https://github.com/shevabam");
            }}
          >
            shevabam
          </Text>
        </Text>

        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "#369457",
            paddingVertical: 10,
            paddingHorizontal: 25,
            textAlign: "justify",
            fontFamily: "Poppins_500Medium",
          }}
        >
          Designed and developed by{" "}
          <Text
            style={{
              textDecorationLine: "underline",
              fontFamily: "Poppins_700Bold",
            }}
            onPress={() => {
              Linking.openURL("https://github.com/hariperisetla");
            }}
          >
            {"\n"}Hari Perisetla
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
