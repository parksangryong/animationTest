import { View, ScrollView, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const AnimatableTest = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Animatable.View
          animation="slideInLeft"
          duration={1000}
          style={{ width: 100, height: 100, backgroundColor: "red" }}
        ></Animatable.View>
        <Animatable.View
          animation="bounce"
          duration={2000}
          delay={1000}
          style={{ width: 100, height: 100, backgroundColor: "pink" }}
        ></Animatable.View>
        <Animatable.View
          animation="jello"
          duration={3000}
          delay={3000}
          style={{ width: 100, height: 100, backgroundColor: "brown" }}
        ></Animatable.View>
      </View>
      <View style={styles.container}>
        <Animatable.Text
          animation="fadeIn"
          duration={1000}
          delay={1000}
          style={{ fontSize: 20, color: "green" }}
        >
          Hello
        </Animatable.Text>
      </View>
      <View style={styles.container}>
        <Animatable.Text
          animation="zoomIn"
          duration={1000}
          delay={1000}
          style={{ fontSize: 20, color: "green" }}
        >
          Hello
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
