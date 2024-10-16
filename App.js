import React from "react";
import { Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import ReanimatedTest from "./src/screens/ReanimatedTest";
import LottiTest from "./src/screens/LottiTest";
import AnimatableTest from "./src/screens/AnimatableTest";
import SpringTest from "./src/screens/SpringTest";

const BottomTab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarIcon: () => null,
        tabBarLabelStyle: {
          bottom: 15,
        },
      }}
    >
      <BottomTab.Screen name="Reanimated" component={ReanimatedTest} />
      <BottomTab.Screen name="Lotti" component={LottiTest} />
      <BottomTab.Screen name="Animatable" component={AnimatableTest} />
      <BottomTab.Screen name="Spring" component={SpringTest} />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}
