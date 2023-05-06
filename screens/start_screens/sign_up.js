import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { StackActions } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { Image } from "react-native";
import * as Font from "expo-font";

export default function SignUpscreen({ navigation }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [gmail, setGmail] = useState("");
  const [pass, setPass] = useState("");
  const [on, setOn] = useState(false);
  const [nameRequired, setNameRequired] = useState("Name");
  const [emailRequired, setEmailRequired] = useState("Email");
  const [passRequired, setPassRequired] = useState("Password");
  const [namemessagecolor, setNameMessageColor] = useState("#ADA4A5");
  const [emailmessagecolor, setEmailMessageColor] = useState("#ADA4A5");
  const [passmessagecolor, setPassMessageColor] = useState("#ADA4A5");
  const [checkColor, setCheckColor] = useState("#ADA4A5");
  const [EmailIconColor, setEmailIconColor] = useState("#7B6F72");
  const [PassIconColor, setPassIconColor] = useState("#7B6F72");
  const [nameIconColor, setNameIconColor] = useState("#7B6F72");

  const [loaded] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat-Black.ttf"),
    Montserrat_light:require("../../assets/fonts/Montserrat-Light.ttf"),
    Poppins: require("../../assets/fonts/Poppins-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const handleSignUp = () => {
    if (name == "") {
      setNameRequired("Bạn chưa điền tên!");
      setNameMessageColor("#f54c4c");
      setNameIconColor("#f54c4c");
    }
    if (gmail == "") {
      setEmailRequired("Bạn chưa điền email!");
      setEmailMessageColor("#f54c4c");
      setEmailIconColor("#f54c4c");
    }
    if (pass == "") {
      setPassRequired("Bạn chưa điền mật khẩu!");
      setPassMessageColor("#f54c4c");
      setPassIconColor("#f54c4c");
    }
    setTimeout(() => {
      setEmailRequired("Email");
      setEmailMessageColor("#ADA4A5");
      setEmailIconColor("#7B6F72");
      setPassRequired("Mật khẩu");
      setPassMessageColor("#ADA4A5");
      setPassIconColor("#7B6F72");
      setNameRequired("Tên");
      setNameMessageColor("#ADA4A5");
      setNameIconColor("#7B6F72");
      setCheckColor("#ADA4A5");
    }, 3000);
    if (!isChecked) {
      setCheckColor("#f54c4c");
    }
    if (gmail != "" && pass != "" && name != "" && isChecked) {
      global.name=name;
      navigation.navigate("HiScreen");
    }
  };

  const togglePasswordVisibility = () => {
    setOn(!on);
  };
  return (
    <View style={styles.bigcontainer}>
      <Image source={require("../../assets/bao.png")} style={styles.bao} />
      <Image
        source={require("../../assets/avocado.png")}
        style={styles.avocado}
      />
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.title}>NutriAI</Text>
        <Text style={styles.quote}>Your way to fitness</Text>
        <Text style={styles.formName}>Tạo tài khoản</Text>
        {/* Name */}
        <TextInput
          style={[styles.input, { borderColor: namemessagecolor }]}
          onChangeText={setName}
          value={name}
          placeholder={nameRequired}
          placeholderTextColor={namemessagecolor}
        />
        <AntDesign
          name="user"
          size={24}
          color={nameIconColor}
          style={styles.userIcon}
        />
        {/* Email */}
        <TextInput
          style={[styles.input, { borderColor: emailmessagecolor }]}
          onChangeText={setGmail}
          value={gmail}
          placeholder={emailRequired}
          placeholderTextColor={emailmessagecolor}
        />
        <MaterialCommunityIcons
          name="gmail"
          size={24}
          color={EmailIconColor}
          style={styles.gmailIcon}
        />
        {/* Password */}
        <TextInput
          style={[styles.input, { borderColor: passmessagecolor }]}
          onChangeText={setPass}
          value={pass}
          placeholder={passRequired}
          placeholderTextColor={passmessagecolor}
          secureTextEntry={!on}
        />
        <AntDesign
          name="lock1"
          size={24}
          color={PassIconColor}
          style={styles.lockIcon}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={togglePasswordVisibility}
        >
          <Ionicons
            name={on ? "ios-eye-outline" : "ios-eye-off-outline"}
            size={24}
            color={PassIconColor}
          />
        </TouchableOpacity>
        <View style={styles.terms}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={"grey"}
          />
          <Text style={{ width: "90%", marginLeft: 10, color: checkColor }}>
            By continuing you accept our Privacy Policy and Term of Use
          </Text>
        </View>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Đăng kí</Text>
        </TouchableOpacity>
        <View style={styles.seperator}>
          <View style={styles.line}></View>
          <Text style={{ marginLeft: 10, marginRight: 10 }}>Or</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.other}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../../assets/google.png")}
              style={styles.socialIcon}
            />
          </View>
          <View style={styles.iconContainer}>
            <Image
              source={require("../../assets/facebook.png")}
              style={styles.socialIcon}
            />
          </View>
        </View>
        <Text style={styles.toLoginText}>
          Bạn đã có tài khoản?
          <Text
            style={styles.toLoginText2}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            {" "}
            Đăng nhập
          </Text>
        </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    position: "absolute",
    left: "8%",
    zIndex: 2,
  },
  bigcontainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 48,
    letterSpacing: 0,
    textAlign: "center",
    color: "#3E445F",
    marginTop: 20,
    marginBottom: 11,
  },
  quote: {
    fontFamily: "Montserrat_light",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "center",
    marginBottom: 20,
    color: "#3E445F",
  },
  formName: {
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "center",
    color: "#00113D",
  },
  input: {
    height: 48,
    width: 315,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#F7F8F8",
    borderRadius: 14,
    marginTop: 30,
    paddingLeft: 43,
  },
  userIcon: {
    position: "absolute",
    zIndex: 10,
    top: 190,
    left: 13,
  },
  gmailIcon: {
    position: "absolute",
    top: 268,
    left: 15,
  },
  lockIcon: {
    position: "absolute",
    top: 346,
    left: 16,
  },
  eyeIcon: {
    position: "absolute",
    top: 346,
    right: 15,
    width: 25,
    height: 20,
  },
  terms: {
    marginTop: 20,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 315,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  signUpButton: {
    height: 60,
    width: 315,
    borderRadius: 99,
    marginTop: 27,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4B6AB9",
  },
  buttonText: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "#FFFFFF",
  },
  seperator: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  line: {
    height: 1,
    width: "35%",
    backgroundColor: "#DDDADA",
  },
  socialIcon: {
    width: 20,
    height: 20,
  },
  iconContainer: {
    padding: 10,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 16,
    marginRight: 16,
  },
  other: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  toLoginText: {
    marginTop: 10,
    fontSize: 16,
  },
  toLoginText2: {
    fontSize: 16,
    color: "#3C8F7C",
  },
  bao: {
    position: "absolute",
    zIndex: 1,
    top: 70,
  },
  avocado: {
    position: "absolute",
    zIndex: 1,
    right: 0,
    bottom: -10,
  },
});
