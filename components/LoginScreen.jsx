import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const LoginScreen = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Image
          source={require("@/assets/images/Iphone.jpeg")}
          style={{
            width: 220,
            height: 450,
            borderRadius: 20,
            borderWidth: 6,
            borderColor: "#000",
          }}
        ></Image>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 20,
          marginTop: -25,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Poppins-Bold",
            textAlign: "center",
          }}
        >
          Your Ultimate{" "}
          <Text
            style={{
              color: Colors.PRIMARY,
            }}
          >
            Community Buisness
          </Text>
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            textAlign: "center",
            marginVertical: 15,
            color: Colors.GRAY,
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          culpa voluptate, incidunt nobis numquam quo sit. Neque non
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 15,
            borderRadius: 10,
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontFamily: "Poppins-Bold",
            }}
          >
            Lets get Started
          </Text>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
