import { View, ScrollView, Button, StyleSheet } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  Easing,
  ReduceMotion,
  useAnimatedStyle,
} from "react-native-reanimated";

const ReanimatedTest = () => {
  const width = useSharedValue(100);
  const translateX = useSharedValue(0);
  const radius = useSharedValue(0);

  const translateX2 = useSharedValue(0);
  const translateX3 = useSharedValue(0);

  const pressed = useSharedValue<boolean>(false);

  const offset = useSharedValue<number>(0);
  const decayWidth = useSharedValue<number>(0);

  //애니메이션1
  const pregressPress = (type: "plus" | "minus") => {
    if (type === "plus") {
      width.value = withSpring(width.value + 30, {
        reduceMotion: ReduceMotion.Never,
      });
    } else {
      width.value = withSpring(width.value - 30, {
        reduceMotion: ReduceMotion.Never,
      });
    }
  };

  //애니메이션2
  const translateXPress = (type: "left" | "right") => {
    if (type === "left") {
      translateX.value = withSpring(translateX.value - 50, {
        reduceMotion: ReduceMotion.Never,
      });
      radius.value = withSpring(radius.value - 10, {
        reduceMotion: ReduceMotion.Never,
      });
    } else {
      translateX.value = withSpring(translateX.value + 50, {
        reduceMotion: ReduceMotion.Never,
      });
      radius.value = withSpring(radius.value + 10, {
        reduceMotion: ReduceMotion.Never,
      });
    }
  };

  //애니메이션3
  const translateX2Press = (type: "left" | "right") => {
    if (type === "left") {
      translateX2.value = withTiming(translateX2.value - 150, {
        duration: 1000,
        easing: Easing.inOut(Easing.quad),
        reduceMotion: ReduceMotion.Never,
      });
      translateX3.value = withSpring(translateX3.value - 150, {
        mass: 1,
        stiffness: 100,
        damping: 10,
        reduceMotion: ReduceMotion.Never,
      });
    } else {
      translateX2.value = withTiming(translateX2.value + 150, {
        duration: 2000,
        easing: Easing.inOut(Easing.quad),
        reduceMotion: ReduceMotion.Never,
      });
      translateX3.value = withSpring(translateX3.value + 150, {
        mass: 1,
        stiffness: 100,
        damping: 10,
        reduceMotion: ReduceMotion.Never,
      });
    }
  };

  //애니메이션 4
  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true;
    })
    .onFinalize(() => {
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? "#FFE04B" : "#B58DF1",
    transform: [{ scale: withTiming(pressed.value ? 1.2 : 1) }],
  }));

  return (
    <ScrollView style={styles.container}>
      {/* 크기 변화 */}
      <View style={styles.firstView}>
        <Animated.View
          style={{
            width,
            height: 100,
            backgroundColor: "violet",
            borderRadius: 10,
          }}
        />
        <View style={styles.buttonContainer}>
          <Button onPress={() => pregressPress("plus")} title="Plus" />
          <Button onPress={() => pregressPress("minus")} title="Minus" />
        </View>
      </View>
      {/* 옆으로 밀기 */}
      <View style={styles.secondView}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "violet",
            borderRadius: radius,
            transform: [{ translateX }],
          }}
        />
        <View style={styles.buttonContainer}>
          <Button onPress={() => translateXPress("left")} title="Left" />
          <Button onPress={() => translateXPress("right")} title="Right" />
        </View>
      </View>
      {/* 옆으로 굴러가기 */}
      <View style={styles.thirdView}>
        <Animated.View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "green",
            transform: [{ translateX: translateX2 }],
          }}
        />
        <View style={{ height: 5 }} />
        <Animated.View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "olive",
            transform: [{ translateX: translateX3 }],
          }}
        />
        <View style={styles.buttonContainer}>
          <Button onPress={() => translateX2Press("left")} title="Left" />
          <Button onPress={() => translateX2Press("right")} title="Right" />
        </View>
      </View>
      {/* 애니메이션4 */}
      <View style={styles.fourthView}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <GestureDetector gesture={tap}>
            <Animated.View style={[styles.circle, animatedStyles]} />
          </GestureDetector>
        </GestureHandlerRootView>
      </View>
      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  firstView: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "white",
    overflow: "hidden",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingVertical: 10,
  },
  secondView: {
    alignItems: "flex-start",
    marginBottom: 20,
    backgroundColor: "white",
    overflow: "hidden",
  },
  thirdView: {
    alignItems: "flex-end",
    marginBottom: 20,
    backgroundColor: "white",
    overflow: "hidden",
  },
  fourthView: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "white",
    overflow: "hidden",
    paddingVertical: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default ReanimatedTest;
