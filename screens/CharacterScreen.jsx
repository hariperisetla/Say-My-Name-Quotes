import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Quote from "../components/Quote";

const CharacterScreen = ({ navigation }) => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);
  const authorArr = [
    "Walter White",
    "Jesse Pinkman",
    "Saul Goodman",
    "Mike Ehrmantraut",
    "Hank Schrader",
    "Gustavo Fring",
    "Skyler White",
    "Badger",
    "The Fly",
    "Walter White Jr",
  ];

  const fetchQuoteByCharacter = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.breakingbadquotes.xyz/v1/quotes"
      );
      if (response.status === 200) {
        response.data.map((quote) => {
          if (quote.author === "Walter White") {
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
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item}
        data={authorArr}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              position: "relative",
              justifyContent: "center",
              width: "100%",
              margin: 10,
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 50,
                padding: 20,
                margin: 5,
                height: 100,
                backgroundColor: "#45BD6F",
                // paddingHorizontal: 5,
                // paddingVertical: 15,
                // marginHorizontal: 50,
                // marginVertical: 8,
              }}
              onPress={() => {
                navigation.navigate("Info", { name: item });
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Poppins_700Bold",
                  textAlign: "center",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* {authorArr.map((auth, index) => (
        <TouchableOpacity
          key={index}
          title={auth}
          onPress={() => {
            navigation.navigate("Info", { name: auth });
          }}
        >
          <Text style={{ fontSize: 25 }}>{auth}</Text>
        </TouchableOpacity>
      ))} */}
    </SafeAreaView>
  );
};

// export default CharacterScreen;

// const CharacterScreen = () => {
//   return <Text>CharacterScreen</Text>;
// };

export default CharacterScreen;
