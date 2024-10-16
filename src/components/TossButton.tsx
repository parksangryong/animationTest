import React from "react";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const TossButton = ({
  onPress,
  title,
}: {
  onPress: () => void;
  title: string;
}) => {
  const scale = useSharedValue(1);
  const backgroundColor = useSharedValue("#0064FF");
  const textColor = useSharedValue("#FFFFFF");

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      backgroundColor: backgroundColor.value,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: textColor.value,
    };
  });

  const handlePressIn = () => {
    scale.value = withTiming(0.97, {
      duration: 200,
      reduceMotion: ReduceMotion.Never,
    });
    backgroundColor.value = withTiming("#0064DF", {
      duration: 200,
      reduceMotion: ReduceMotion.Never,
    });
    textColor.value = withTiming("#DDDDDD", {
      duration: 200,
      reduceMotion: ReduceMotion.Never,
    });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, {
      duration: 200,
      reduceMotion: ReduceMotion.Never,
    });
    backgroundColor.value = withTiming("#0064FF", {
      duration: 200,
      reduceMotion: ReduceMotion.Never,
    });
    textColor.value = withTiming("#FFFFFF", {
      duration: 200,
      reduceMotion: ReduceMotion.Never,
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPress} // 클릭 시 onPress 함수 호출
      onPressIn={handlePressIn} // 눌릴 때 애니메이션
      onPressOut={handlePressOut} // 떼면 원래대로
    >
      <Animated.View style={[styles.button, animatedStyle]}>
        <Animated.Text style={[styles.buttonText, animatedTextStyle]}>
          {title}
        </Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default TossButton;
