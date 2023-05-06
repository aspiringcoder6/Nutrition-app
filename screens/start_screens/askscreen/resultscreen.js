import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useEffect } from "react";
export default function ResultScreen() {
  const [flip, setFlip] = useState(1);
  useEffect(() => {
    if (global.weight < global.desireWeight) {
      setFlip(-1);
    }
  }, [flip]);

  return (
    <View style={styles.container}>
      <Image style={styles.start} source={require("../../../assets/dot.png")} />
      <View style={styles.starttag}>
        <Text style={{ color: "#FFFFFF" }}>{global.weight}kg</Text>
      </View>
      <View style={styles.endtag}>
        <Text style={{ color: "#FFFFFF" }}>{global.desireWeight}kg</Text>
      </View>
      <Image style={styles.end} source={require("../../../assets/dot.png")} />
      <Text style={styles.header}>
        Kế hoạch cải thiện của bạn đã được khởi tạo!
      </Text>
      <Image
        source={require("../../../assets/graph.png")}
        style={[styles.graph, { transform: [{ scaleX: flip }] }]}
      />
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
  header: {
    color: "#0047D7",
    fontFamily: "Montserrat",
    fontSize: 20,
    lineHeight: 30,
    textAlign: "center",
  },
  graph: {
    marginTop: 63,
  },
  start: {
    position: "absolute",
    zIndex: 10,
    bottom: 210,
    left: 64,
  },
  end: {
    position: "absolute",
    zIndex: 10,
    right: 56,
    top: 330,
  },
  starttag: {
    position:"absolute",
    bottom:230,
    left:45,
    backgroundColor: "#C2C2C2",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 3.5,
    paddingBottom: 3.5,
    borderRadius: 6,
  },
  endtag:{
    position:"absolute",
    bottom:342,
    right:40,
    backgroundColor: "#C2C2C2",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 3.5,
    paddingBottom: 3.5,
    borderRadius: 6,
  }
});
