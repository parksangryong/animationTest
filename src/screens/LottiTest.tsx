import LottieView from "lottie-react-native";
import React from "react";
import { View, ScrollView } from "react-native";

const LottiTest = () => {
  // json 파일을 사용하여 애니메이션 적용
  // 애니메이션 종류 : 모션 그래픽 제작 툴인 After Effects를 사용하여 제작한 애니메이션 파일
  // 애니메이션 파일 형식 : json, lottie 파일
  // 애니메이션 파일 제작 툴 : After Effects, Adobe Illustrator, Adobe After Effects, Adobe Photoshop, Adobe Flash, Adobe Animate

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
