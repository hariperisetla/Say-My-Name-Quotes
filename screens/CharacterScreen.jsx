import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import { array } from "yargs";

const CharacterScreen = ({ navigation }) => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuoteByCharacter = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.breakingbadquotes.xyz/v1/quotes"
      );
      if (response.status === 200) {
        // const finalData = response.data.filter(
        //   (item, index) => response.data.indexOf(item) === item
        // );
        // console.log(finalData);

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

  useEffect(() => {
    fetchQuoteByCharacter();
  });

  return (
    <SafeAreaView
      style={{ backgroundColor: "#032202", flex: 1, justifyContent: "center" }}
    >
      <View>
        <Text>Character Screen</Text>
        {/* <Button
          title="Walter White"
          onPress={() => navigation.navigate("Info", { name: "Walter White" })}
        >
          Walter White
        </Button> */}
      </View>
    </SafeAreaView>
  );
};

export default CharacterScreen;
