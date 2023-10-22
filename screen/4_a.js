import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function Four_A() {
  var DATA = [
    {
      id: 1,
      image: "am.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 2,
      image: "ga.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 3,
      image: "cau.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 4,
      image: "choi.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 5,
      image: "ld.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 6,
      image: "hltc.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 7,
      image: "do.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 8,
      image: "am.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 9,
      image: "ga.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 10,
      image: "cau.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 11,
      image: "choi.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 12,
      image: "ld.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 13,
      image: "hltc.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 14,
      image: "do.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: 25,
            height: "10%",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
          </Text>
        </View>
        <View style={{ paddingHorizontal: 10, height: "90%" }}>
          <ScrollView style={{ height: "100%" }} >
            <FlatList
              data={DATA}
              numColumns={1}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <View style={styles.viewItem}>
                    <Image
                      style={{ flex: 1, height: 95, width: 100 }}
                      source={require(`../img/${item.image}`)}
                    />
                    <View
                      style={{ flex: 2, marginHorizontal: 10, height: "50%" }}
                    >
                      <Text style={styles.textItem}>{item.name}</Text>
                      <Text style={[styles.textItem]}>{item.shop}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "red",
                          height: 40,
                          width: 88,
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ textAlign: "center", color: "white" }}>
                          Chat
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flex: 1,
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  containerBody: {
    flex: 15,
  },
  viewItem: {
    flexDirection: "row",
    marginBottom: 5,
    height: 100,
    alignItems: "center",
    borderColor: "gray",
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  textItem: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
