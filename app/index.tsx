import { Image, Text, View } from "react-native";

export default function Index() {
  const handlePress = () => console.log("Text pressed");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "dodgerblue",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text onPress={handlePress}>Hello Beer Lover!</Text>
      <Image source={require('../assets/images/beer.jpg')} style={{width: 300, height: 300}}></Image>
    </View>
  );
}

