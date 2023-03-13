import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Quote = ({ data, onPress }) => {
  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          color: "#369457",
          marginTop: 20,
          padding: 30,
          margin: 3,
          borderRadius: 50,
        }}
      >
        <Text style={{ textAlign: "left", color: "#369457" }}>
          <FontAwesome name="quote-left" size={50} />
        </Text>
        <Text
          style={{
            // fontFamily: "Poppins_400Regular",
            fontFamily: "Poppins_600SemiBold",
            fontSize: 20,
            color: "#369457",
            // fontSizeAdjust: "inherit",
            // fontWeight: 700,
            textTransform: "capitalize",
            lineHeight: 55,
          }}
        >
          {data.quote}
        </Text>
        <Text
          style={{
            paddingTop: 10,
            fontSize: 20,
            textAlign: "right",
            fontFamily: "Poppins_500Medium_Italic",
            color: "#1F6032",
          }}
        >
          - {data.author}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={onPress}
          style={{
            borderRadius: 50,
            backgroundColor: "#45BD6F",
            paddingHorizontal: 5,
            paddingVertical: 15,
            marginHorizontal: 50,
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
  );
};

export default Quote;
