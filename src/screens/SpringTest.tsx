import {
  animated,
  useSpring,
  useTrail,
  useTransition,
} from "@react-spring/native";
import { useState } from "react";
import { View, ScrollView, StyleSheet, Text, Button } from "react-native";

const AnimatedView = animated(View);

const SpringTest = () => {
  // useSpring 애니메이션 설정 : 개별 요소에 애니메이션 적용시 사용
  const springProps = useSpring({
    delay: 1000,
    from: { opacity: 0, translateX: 0 },
    to: { opacity: 1, translateX: 100 },
  });

  // useTrail 애니메이션 설정 : 여러 요소에 동일한 애니메이션 적용시 사용
  const items = ["Item 1", "Item 2", "Item 3"];
  const trailProps = useTrail(items.length, {
    delay: 1500,
    from: { opacity: 0, translateX: 0 },
    to: { opacity: 1, translateX: 200, mass: 10, friction: 10 },
  });

  //useTransition 애니메이션 설정 : 요소의 추가 제거와 관련된 애니메이션 적용시 사용
  const [show, setShow] = useState(true);
  const transitionProps = useTransition(show, {
    from: { opacity: 0, translateX: 50 },
    enter: { opacity: 1, translateX: 150 },
    leave: { opacity: 0, translateX: 100 },
  });

  return (
    <ScrollView>
      {/* useSpring 애니메이션 */}
      <AnimatedView
        style={[
          {
            opacity: springProps.opacity,
            transform: [{ translateX: springProps.translateX }],
          },
          styles.boxSpring,
        ]}
      />
      {/* useTrail 애니메이션 */}
      {items.map((item, index) => (
        <AnimatedView
          key={index}
          style={[
            {
              opacity: trailProps[index].opacity,
              transform: [{ translateX: trailProps[index].translateX }],
            },
            styles.boxTrail,
          ]}
        >
          <Text>{item}</Text>
        </AnimatedView>
      ))}
      {/* useTransition 애니메이션 */}
      {transitionProps((style, item) =>
        item ? (
          <animated.View
            style={[
              {
                opacity: style.opacity,
                transform: [{ translateX: style.translateX }],
              },
              styles.boxTransition,
            ]}
          />
        ) : null
      )}
      <Button onPress={() => setShow(!show)} title="Toggle" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxSpring: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  boxTrail: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  boxTransition: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});

export default SpringTest;
