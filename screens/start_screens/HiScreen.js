import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { Image } from 'react-native';
export default function HiScreen({route,navigation}) {
  const [loaded] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat-Black.ttf"),
    Montserrat_light:require("../../assets/fonts/Montserrat-Light.ttf"),
    Poppins: require("../../assets/fonts/Poppins-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/avocado2.png")} style={styles.avocado}/>
      <Text style={styles.hello}>Chào {global.name}</Text>
      <Text style={styles.introduce}>Cùng làm quen nhau với vài câu hỏi nào!</Text>
      <AntDesign name="arrowright" size={24} color="black" style={styles.next} onPress={()=>navigation.navigate("Askscreen1")}/>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  avocado:{
    position:"absolute",
    bottom:0,
  },
  hello:{
    marginTop:70,
    fontFamily:"Montserrat",
    color: "#3E445F",
    fontSize:40,
  },
  introduce:{
    fontFamily:"Montserrat_light",
    //fontWeight:"light",
    fontSize:16,
    marginTop:24,
    color: "#3E445F",
  },
  next:{
    marginTop:30,
    padding:10,
    borderWidth:1.5,
    borderRadius:8,
  }
});
