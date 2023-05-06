import React, { useRef, useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import "react-native-url-polyfill/auto";
import LoadingScreen from "../../loadingscreen";
import { OpenAIApi } from "openai";
import { useFonts } from "expo-font";
import { StackActions } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function SeeResultScreen({ navigation }) {
  const [change, setChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = "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";
  const { Configuration, OpenAIApi } = require("openai");
  useEffect(() => {
    if (change == true) {
      navigation.goBack();
      resetScreen();
    }
  }, [change]);
  const resetScreen = () => {
    navigation.dispatch(StackActions.replace("Askscreen8"));
  };
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);

  const [loaded] = useFonts({
    Montserrat: require("../../../assets/fonts/Montserrat-Black.ttf"),
    Montserrat_medium: require("../../../assets/fonts/Montserrat-Medium.ttf"),
    Poppins: require("../../../assets/fonts/Poppins-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const handleSend = async () => {
    setIsLoading(true);
    const prompt = `Giới tính:${global.gender},Tuổi: ${global.age} , Cân nặng ${global.weight} kg,Chiều cao: cao ${global.height} cm, Mục đích${global.goal}. Cân nặng mong muốn: ${global.desireWeight}. Thời gian đạt được: ${global.time}. Mức độ tập thể dục: ${global.excercise}. Chỉ trả lời những thông tin theo kiểu mẫu này:
    +Số calories cần thiết một ngày:\n+Số cân nặng thay đổi trong một tuần:\n+Chế độ ăn:
    `;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 1024,
      temperature: 0,
    });
    const sentences = response.data.choices[0].text.split("\n");
    global.calories=sentences[1].split(":")[1].slice(0, -1);
    global.expected=sentences[2].split(":")[1].slice(0, -1);
    global.diet=sentences[3].split(":")[1].slice(0, -1);
    navigation.navigate("ResultScreen")    
    setIsLoading(false)
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
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
        <Text style={styles.header}>Hồ sơ của bạn hiện tại:</Text>
        <View style={styles.smallcontainer}>
        <Text style={styles.information}>
          <AntDesign
            name="user"
            size={24}
            color="gray"
            style={styles.userIcon}
          />
          Giới tính: {global.gender}
        </Text>
        <Text style={styles.information}>
          <Feather name="target" size={24} color="grey" />
          Mục đích: {global.goal}
        </Text>
        <Text style={styles.information}>
          <AntDesign name="clockcircleo" size={24} color="grey" /> Tuổi:
          {global.age}
        </Text>
        <Text style={styles.information}>
          <MaterialCommunityIcons
            name="human-male-height"
            size={24}
            color="grey"
          />{" "}
          Chiều cao:
          {global.height} cm
        </Text>
        <Text style={styles.information}>
          <MaterialCommunityIcons name="weight" size={24} color="grey" /> Cân
          nặng hiện tại :{global.weight} kg
        </Text>
        <Text style={styles.information}>
          <MaterialCommunityIcons name="weight" size={24} color="grey" /> Cân
          nặng hướng tới :{global.desireWeight} kg
        </Text>
        <Text style={styles.information}>
        <AntDesign name="clockcircleo" size={24} color="grey" />Trong thời gian :{global.time}
        </Text>
        <Text style={styles.information}>
        <MaterialCommunityIcons name="weight-lifter" size={24} color="grey" />Cường độ tập :{global.excercise}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Xem kết quả</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>)}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  header: {
    marginTop: 87,
    fontFamily: "Montserrat",
    color: "#3E445F",
    fontSize: 20,
  },
  button: {
    height: 60,
    width: 315,
    borderRadius: 99,
    marginTop: 27,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4B6AB9",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  arrow: {
    position: "absolute",
    top: 30,
    left: 20,
    fontSize: 40,
    color: "#4E4B66",
  },
  information:{
    fontSize:18,
    fontFamily:"Montserrat_light",
    marginTop:20,
  }
});
