import { useState } from "react";
import { View, ScrollView, Button, StyleSheet, Text } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";

import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  Easing,
  ReduceMotion,
  useAnimatedStyle,
} from "react-native-reanimated";
import TossButton from "../components/TossButton";

const ReanimatedTest = () => {
  // reanimated 애니메이션 설정 : 복잡한 애니메이션 적용시 사용
  // 애니메이션 종류 : spring, timing, decay, gesture, sequence, parallel, stagger, loop, delay, event
  // 애니메이션 적용방법: useSharedValue, useAnimatedStyle, useAnimatedProps, useDerivedValue, useAnimatedGestureHandler, useAnimatedReaction, useAnimatedValue, useAnimatedValueMap, useAnimatedValueXY, useSharedValue, useSharedValueMap, useSharedValueXY
  // 애니메이션 적용 컴포넌트: View, Text, Image, ScrollView, FlatList, SectionList, Animated.View, Animated.Text, Animated.Image, Animated.ScrollView, Animated.FlatList, Animated.SectionList

  const width = useSharedValue(100);
  const translateX = useSharedValue(0);
  const radius = useSharedValue(0);

  const translateX2 = useSharedValue(0);
  const translateX3 = useSharedValue(0);

  const pressed = useSharedValue<boolean>(false);

  const isVisible = useSharedValue(true);
  const opacity = useSharedValue(0);

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
    const direction = type === "left" ? -1 : 1;
    const change = 260 * direction;

    translateX.value = withSpring(translateX.value + change, {
      duration: 3000,
      reduceMotion: ReduceMotion.Never,
    });
    radius.value = withSpring(radius.value + 50 * direction, {
      duration: 3000,
      reduceMotion: ReduceMotion.Never,
    });
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
    reduceMotion: ReduceMotion.Never,
  }));

  //애니메이션5
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const toggleVisibility = () => {
    opacity.value = withTiming(isVisible.value ? 0 : 1, {
      duration: 1000,
      reduceMotion: ReduceMotion.Never,
    });
    isVisible.value = !isVisible.value; // 상태 반전
  };

  //애니메이션6 : 드래그 앤 드롭
  const translateX4 = useSharedValue(0);
  const translateY4 = useSharedValue(0);

  const animatedStyle6 = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX4.value },
        { translateY: translateY4.value },
      ],
    };
  });

  const onDrag = (event: any) => {
    const { translationX, translationY } = event.nativeEvent;
    translateX4.value = translationX;
    translateY4.value = translationY;
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
          paddingHorizontal: 20,
        }}
      >
        <TossButton
          onPress={() => {}}
          title="동의하고 자산 계속 보기"
          disabled={true}
        />
        <View style={{ height: 10 }} />
        <TossButton
          onPress={() => {}}
          title="동의하고 자산 계속 보기"
          disabled={false}
        />
      </View>

      {/* 크기 변화 */}
      <View style={styles.firstView}>
        <Text style={styles.text}> withSpring</Text>
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
        <Text style={styles.text}> withSpring2</Text>
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
        <Text style={styles.text}> withTiming & withSpring</Text>
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
        <Text style={styles.text}>gestureTap</Text>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <GestureDetector gesture={tap}>
            <Animated.View style={[styles.circle, animatedStyles]} />
          </GestureDetector>
        </GestureHandlerRootView>
      </View>
      {/* 애니메이션5 */}
      <View style={styles.fifthView}>
        <Text style={styles.text}>Toggle Box</Text>
        <Button title="Toggle Box" onPress={toggleVisibility} />
        {isVisible.value && (
          <Animated.View style={[styles.box, animatedStyle]} />
        )}
      </View>
      {/* 애니메이션6 */}
      <View style={styles.sixthView}>
        <Text style={styles.text}>gestureDrag</Text>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <PanGestureHandler onGestureEvent={onDrag}>
            <Animated.View style={[styles.box2, animatedStyle6]} />
          </PanGestureHandler>
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
  fifthView: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "white",
    overflow: "hidden",
    paddingVertical: 20,
    gap: 10,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 10,
  },
  sixthView: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "white",
    overflow: "hidden",
    paddingVertical: 20,
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: "beige",
    borderRadius: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "center",
  },
});

export default ReanimatedTest;
