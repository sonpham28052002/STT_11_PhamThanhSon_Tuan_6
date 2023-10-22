import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import four_a from "./screen/4_a";
import four_b from "./screen/4_b";
import { FontAwesome ,AntDesign} from "@expo/vector-icons";

var Tab = createBottomTabNavigator();
export default function app() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle:{
            backgroundColor:"#1BA9FF"
          }
        }}>
        <Tab.Screen
          name="four_b"
          component={four_b}
          options={{
            title:"",
            headerStyle: {
              backgroundColor: "#1BA9FF",
            },
            headerTitle: () => {
              return (
                <View style={{height:50, width:300,justifyContent:"center"}}>
                  <TextInput
                    style={{
                      height: 40,
                      width: 250,
                      backgroundColor: "white",
                      paddingLeft: 50,
                    }}
                    placeholder="hvjkasd"
                  />
                  <FontAwesome name="search" size={30} color="black"
                  style={{position:"absolute", left:10}} />
                </View>
              );
            },
            headerRight:
              () => {
                return(
                  <View style={{justifyContent:"center"}}>
                    <FontAwesome name="shopping-cart" size={35} color="white" style={{position:"absolute", right:100, }}/>
                    <AntDesign name="ellipsis1" size={35} color="white" style={{position:"absolute", right:10, fontWeight:"bold"}}/>
                    <View style={{backgroundColor:"red", height:15, width:15 , borderRadius:50, position:"absolute", right:95, top:-15}}></View>
                  </View>
                );
              },
              tabBarIcon:(focus)=>{
                return(
                  <FontAwesome name="home" size={40} style={{color:"black"}}/>
                )
              }
          }}
        />
        <Tab.Screen
          name="4_a"
          component={four_a}
          headerStyle={{ backgroundColor: "red" }}
          options={{
            tabBarIcon:(focus)=>{
                return(
                  <FontAwesome name="bars" size={24} style={{color:"black"}} />
                )
              },
              tabBarActiveTintColor:"red",
            title: "",
            headerRight: () => (
              <AntDesign
                name="shoppingcart"
                size={35}
                color="white"
                style={{ margin: 20 }}
              />
            ),
            headerTitle:() => {
              return(
                <Text style={{fontWeight:"bold", fontSize:30}}>Chat</Text>
              );
            },
            headerStyle: {
              backgroundColor: "#1BA9FF",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: "bold",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
