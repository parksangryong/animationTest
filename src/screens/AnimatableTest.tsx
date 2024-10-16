import { View, ScrollView, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const AnimatableTest = () => {
  //Animatable 애니메이션 설정 : 간단한 애니메이션 적용시 사용
  // 애니메이션 종류 : slideInLeft, bounce, jello, fadeIn, zoomIn
  // 컴포넌트 종류: View, Text, Image

  return (
    <ScrollView>
      <View style={styles.container}>
        <Animatable.View
          animation="bounce"
          duration={1000}
          style={{ width: 100, height: 100, backgroundColor: "red" }}
        ></Animatable.View>
        <Animatable.View
          animation="flash"
          duration={1000}
          delay={1000}
          style={{ width: 100, height: 100, backgroundColor: "pink" }}
        ></Animatable.View>
        <Animatable.View
          animation="jello"
          duration={3000}
          delay={1500}
          style={{ width: 100, height: 100, backgroundColor: "brown" }}
        ></Animatable.View>
      </View>
      <View style={styles.container}>
        <Animatable.View
          animation="pulse"
          duration={1000}
          delay={2000}
          style={{ width: 100, height: 100, backgroundColor: "yellowgreen" }}
        ></Animatable.View>
        <Animatable.View
          animation="rotate"
          duration={2000}
          delay={2500}
          style={{ width: 100, height: 100, backgroundColor: "green" }}
        ></Animatable.View>
        <Animatable.View
          animation="rubberBand"
          duration={3000}
          delay={3000}
          style={{ width: 100, height: 100, backgroundColor: "olive" }}
        ></Animatable.View>
      </View>
      <View style={styles.container}>
        <Animatable.View
          animation="shake"
          duration={1000}
          delay={3500}
          style={{ width: 100, height: 100, backgroundColor: "skyblue" }}
        ></Animatable.View>
        <Animatable.View
          animation="swing"
          duration={2000}
          delay={4000}
          style={{ width: 100, height: 100, backgroundColor: "blue" }}
        ></Animatable.View>
        <Animatable.View
          animation="wobble"
          duration={3000}
          delay={4500}
          style={{ width: 100, height: 100, backgroundColor: "navy" }}
        ></Animatable.View>
      </View>
      <View style={styles.container}>
        <Animatable.View
          animation="slideInLeft"
          duration={1000}
          delay={5000}
          style={{ width: 100, height: 100, backgroundColor: "yellow" }}
        ></Animatable.View>
        <Animatable.View
          animation="fadeIn"
          duration={2000}
          delay={6000}
          style={{ width: 100, height: 100, backgroundColor: "gold" }}
        ></Animatable.View>
        <Animatable.View
          animation="zoomIn"
          duration={3000}
          delay={7000}
          style={{ width: 100, height: 100, backgroundColor: "orange" }}
        ></Animatable.View>
      </View>
      <View style={styles.container}>
        <Animatable.Text
          animation="zoomInRight"
          duration={1000}
          delay={1000}
          style={{ fontSize: 20, color: "green" }}
        >
          zoomInRight, Hello
        </Animatable.Text>
      </View>
      <View style={styles.container}>
        <Animatable.Text
          animation="flipInX"
          duration={1000}
          delay={1000}
          style={{ fontSize: 20, color: "green" }}
        >
          flipInX, Hello
        </Animatable.Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AnimatableTest;
