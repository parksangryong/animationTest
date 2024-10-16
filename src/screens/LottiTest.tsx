import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { View, Text, ScrollView } from "react-native";

const LottiTest = () => {
  return (
    <ScrollView>
      <View>
        <LottieView
          source={require("../assets/Lottie_Lego.json")}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
        <LottieView
          source={require("../assets/Lottie_bob.json")}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
        <LottieView
          source={require("../assets/assuta.loader.json")}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
      </View>
    </ScrollView>
  );
};

export default LottiTest;
