import React, { useRef, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";
import { OpenAIApi } from "openai";
import 'react-native-url-polyfill/auto';
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { StackActions } from "@react-navigation/native";

export default function AskScreen8({ navigation }) {
  const color1 = useRef(new Animated.Value(0.6)).current;
  const color2 = useRef(new Animated.Value(0.6)).current;
  const [change, setChange] = useState(false);
  const color3 = useRef(new Animated.Value(0.6)).current;
  const color4 = useRef(new Animated.Value(0.6)).current;
  const color5 = useRef(new Animated.Value(0.6)).current;
  useEffect(() => {
    if (change == true) {
      navigation.goBack();
      resetScreen();
    }
  }, [change]);
  const resetScreen = () => {
    navigation.dispatch(StackActions.replace("Askscreen7"));
  };
  const Press1 = () => {
    global.excercise = "không tập";
    Animated.timing(color1, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      navigation.navigate("SeeResultscreen");
    }, 300);
  };
  const Press2 = () => {
    global.excercise = "1-3 ngày/tuần";
    Animated.timing(color2, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {    
      navigation.navigate("SeeResultscreen");
    }, 300);
  };
  const Press3 = () => {
    global.excercise = "4-5 ngày/tuần";
    Animated.timing(color3, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {    
      navigation.navigate("SeeResultscreen");
    }, 300);
  };
  const Press4 = () => {
    global.excercise = "hàng ngày";
    Animated.timing(color4, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {    
      navigation.navigate("SeeResultscreen");
    }, 300);
  };
  const Press5 = () => {
    global.time = "vận động viên";
    Animated.timing(color5, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {    
      navigation.navigate("SeeResultscreen");
    }, 300);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/girl.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={styles.arrow}
          onPress={() => {
            setChange(true);
          }}
        />
        <View style={styles.dots}>
          <View style={[styles.dot, { backgroundColor: "#3E445F" }]}></View>
          <View style={[styles.dot, { backgroundColor: "#3E445F" }]}></View>
          <View style={[styles.dot, { backgroundColor: "#3E445F" }]}></View>
          <View style={[styles.dot, { backgroundColor: "#3E445F" }]}></View>
          <View style={[styles.dot, { backgroundColor: "#3E445F" }]}></View>
          <View style={[styles.dot, { backgroundColor: "#3E445F" }]}></View>
          <View style={[styles.dot, { backgroundColor: "#3E445F" }]}></View>
          <View style={[styles.dot, { backgroundColor: "#3E445F" }]}></View>
        </View>
        <Text style={styles.header}>Chế độ tập thể dục của bạn:</Text>
        <Animated.View style={[styles.choiceContainer, { opacity: color1 }]}>
          <TouchableOpacity style={[styles.choice]} onPress={Press1}>
            <Text style={styles.choiceText}>Không tập</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.choiceContainer, { opacity: color2 }]}>
          <TouchableOpacity style={[styles.choice]} onPress={Press2}>
            <Text style={styles.choiceText}>Nhẹ: tập 1-3 ngày trong tuần</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.choiceContainer, { opacity: color3 }]}>
          <TouchableOpacity style={[styles.choice]} onPress={Press3}>
            <Text style={styles.choiceText}>Trung bình: tập 4-5 ngày trong tuần</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.choiceContainer, { opacity: color4 }]}>
          <TouchableOpacity style={[styles.choice]} onPress={Press4}>
            <Text style={styles.choiceText}>Nặng: Tập hàng ngày</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.choiceContainer, { opacity: color5 }]}>
          <TouchableOpacity style={[styles.choice]} onPress={Press5}>
            <Text style={styles.choiceText}>Siêu nặng: Tập mức độ của vận động viên </Text>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
  },
  dot: {
    width: 11,
    height: 11,
    borderRadius: "50%",
    backgroundColor: "#F3F3F3",
    marginLeft: 14,
  },
  dots: {
    display: "flex",
    flexDirection: "row",
    marginTop: 100,
  },
  header: {
    marginTop: 37,
    fontFamily: "Montserrat",
    color: "#3E445F",
    fontSize: 20,
  },
  choiceContainer: {
    width: 315,
    height: 60,
    marginTop: 32,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(75, 106, 185,1)",
  },
  choice: {
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  choiceText: {
    color: "white",
    fontFamily: "Montserrat_medium",
    fontSize: 16,
    textAlign:"center"
  },
  arrow: {
    position: "absolute",
    top: 30,
    left: 20,
    fontSize: 40,
    color: "#4E4B66",
  },
});
