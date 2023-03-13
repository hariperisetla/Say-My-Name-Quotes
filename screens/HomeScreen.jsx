import React from "react";
import { useState, useEffect } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import axios from "axios";
import Quote from "../components/Quote";

const HomeScreen = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);

  //   const onRefresh = React.useCallback(() => {
  //     setRefreshing(true);
  //     setTimeout(() => {
  //       fetchQuotes();
  //       setRefreshing(false);
  //     }, 2000);
  //   }, []);

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
          //   <ActivityIndicator size="large" color="#369457" />
          <Quote
            data={{ quote: "Wait! I am thinking...", author: "It's me!" }}
            onPress={onPress}
          />
        ) : (
          <FlatList
            numColumns={1}
            keyExtractor={({ index }) => index + 1}
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

export default HomeScreen;
