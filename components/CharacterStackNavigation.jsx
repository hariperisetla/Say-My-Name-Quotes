import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CharacterScreen from "../screens/CharacterScreen";
import IndividualCharacterScreen from "../screens/IndividualCharacterScreen";

const CharacterStack = createNativeStackNavigator();

const CharacterStackNavigation = ({ navigation }) => {
  return (
    <CharacterStack.Navigator>
      <CharacterStack.Screen
        name="Characters"
        options={{
          headerStyle: {
            backgroundColor: "#032202",
          },
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
          },
          headerTintColor: "#369457",
        }}
        component={CharacterScreen}
      />
      <CharacterStack.Screen
        name="Info"
        options={({ route }) => ({
          title: route.params.name + "'s Quotes",
          headerStyle: {
            backgroundColor: "#032202",
          },
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
          },
          headerTintColor: "#369457",
        })}
        component={IndividualCharacterScreen}
      />
    </CharacterStack.Navigator>
  );
};

export default CharacterStackNavigation;
