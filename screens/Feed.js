import React, { Component } from 'react';
import PostCard from "./PostCard";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

let posts = require("./temp_posts.json");


export default class Feed extends Component {
  renderItem = ({item:post})=>{
    return <PostCard post = {post}/>
  };
  keyExtractor = (item,index)=>index.toString();

    render() {
        return (
            <View style = {styles.Container}>
             <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
                <Text style={styles.appTitleText}>Spectagram</Text>
                 </View> 
                <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={posts}
              renderItem={this.renderItem}
            />
            </View> 
             </View> 
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor :"darkblue"
  },
  droidSafeArea:{
    marginTop: Platform.OS === "android"? StatusBar.currentHeight : 35
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
    justifyContent: "center",
    padding: 5
  },
   appTitleText: {
    color: "white",
    fontSize: 28
  },
   cardContainer: {
    flex: 0.85
  }
});







