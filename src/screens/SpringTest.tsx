import { animated, useSpring } from "@react-spring/native";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const SpringTest = () => {
  const animatedStyles = useSpring({
    to: { opacity: 1, transform: "translateX(100px)" },
    from: { opacity: 0, transform: "translateX(0px)" },
  });

  const AnimatedView = animated(View);

  return (
    <ScrollView>
      <AnimatedView style={animatedStyles as any}>
        <View style={styles.boxSpring} />
      </AnimatedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxSpring: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});

export default SpringTest;
