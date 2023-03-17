import React from "react";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import Quote from "../components/Quote";
import axios from "axios";

const IndividualCharacterScreen = ({ route }) => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuoteByCharacter = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.breakingbadquotes.xyz/v1/quotes"
      );
      if (response.status === 200) {
        response.data.map((quote) => {
          if (quote.author === route.params.name) {
            setQuote(response.data);
            setLoading(false);
            // console.log(quote);
          } else {
            fetchQuoteByCharacter();
          }
          // authorArr.push(quote.author);
        });
        // if (response.data.author === "Walter White") {
        //   setQuote(response.data);
        //   console.log(quote);
        //   setLoading(false);
        // } else {
        //   fetchQuoteByCharacter();
        // }
        return;
      } else {
        throw new Error("failed to fetch");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const onPress = () => {
    fetchQuoteByCharacter();
  };

  useEffect(() => {
    fetchQuoteByCharacter();
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: "#032202", flex: 1, justifyContent: "center" }}
    >
      <View>
        {loading ? (
          <Quote
            data={{ quote: "Wait! I am thinking...", author: "It's me!" }}
            onPress={onPress}
          />
        ) : (
          <FlatList
            numColumns={1}
            keyExtractor={(item) => item.author}
            data={quote}
            // refreshControl={
            //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            // }
            renderItem={({ item }) => <Quote data={item} onPress={onPress} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default IndividualCharacterScreen;
