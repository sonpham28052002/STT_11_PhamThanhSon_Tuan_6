import React from "react";
import {View,Text,Image,FlatList,ScrollView,StyleSheet} from "react-native";
import {FontAwesome} from '@expo/vector-icons'

export default function Four_B() {
  var DATA = [
    {
      id: 1,
      image: "usb",
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      star: 4,
      danhgia: 15,
      price: "69.900 đ",
      counpon: "-39%",
    },
    {
      id: 2,
      image: "dayTainghe",
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      star: 4,
      danhgia: 15,
      price: "69.900 đ",
      counpon: "-39%",
    },
    {
      id: 3,
      image: "usb1",
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      star: 4,
      danhgia: 15,
      price: "69.900 đ",
      counpon: "-39%",
    },
    {
      id: 4,
      image: "usb2",
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      star: 4,
      danhgia: 15,
      price: "69.900 đ",
      counpon: "-39%",
    },
    {
      id: 5,
      image: "usb3",
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      star: 4,
      danhgia: 15,
      price: "69.900 đ",
      counpon: "-39%",
    },
    {
      id: 6,
      image: "usb4",
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      star: 4,
      danhgia: 15,
      price: "69.900 đ",
      counpon: "-39%",
    },{
        id: 4,
        image: "usb4",
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        star: 4,
        danhgia: 15,
        price: "69.900 đ",
        counpon: "-39%",
      },
      {
        id: 5,
        image: "usb",
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        star: 4,
        danhgia: 15,
        price: "69.900 đ",
        counpon: "-39%",
      },
      {
        id: 6,
        image: "usb",
        name: "Cáp chuyển từ Cổng USB sang PS2...",
        star: 4,
        danhgia: 15,
        price: "69.900 đ",
        counpon: "-39%",
      },
  ];

  return(
    <View style={{flex:1}}>
        <ScrollView >
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({item})=>{
                    return(
                        <View style={styles.itemView}>
                            <Image
                                style={{height:"50%", width:"100%"}}
                                source={require(`../img/${item.image}.jpg`)}
                            />
                            <Text style={{fontWeight:"bold", fontSize:15}}>{item.name}</Text>
                            <View style={{flexDirection:"row"}}>
                                <View style={{flexDirection:"row"}}>
                                <FontAwesome name="star" size={20} color="yellow" style={{marginRight:5}}/>
                                <FontAwesome name="star" size={20} color="yellow" style={{marginRight:5}}/>
                                <FontAwesome name="star" size={20} color="yellow" style={{marginRight:5}}/>
                                <FontAwesome name="star" size={20} color="yellow" style={{marginRight:5}}/>
                                <FontAwesome name="star" size={20} color="gray" style={{marginRight:5}}/>
                                </View>
                                <Text style={{color:"gray", marginLeft:10}}>({item.danhgia})</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"flex-end"}}>
                                <Text style={{fontWeight:"bold", fontSize:20, marginRight:20}}>{item.price}</Text>
                                <Text>{item.counpon}</Text>
                            </View>
                        </View>
                    );                
                }}
            />
        </ScrollView>
    </View>
  );
}
var styles = StyleSheet.create({
    itemView:{
        height:200,
        width:200,
        marginLeft:10,
        marginTop:10
    }
})