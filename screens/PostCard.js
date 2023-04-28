import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class PostCard extends Component{
  render(){
    return(
      <View style = {styles.container}>
      <View style = {styles.cardContainer}>
      <View style = {styles.authorNameContainer}>
      <Text style = {styles.authorNameText}>
           {this.props.post.author}
           </Text>
           </View>
           <Image 
                source = {require('../assets/post.jpeg')}
                style = {styles.postImage}
                />
                <View style = {styles.captionContaner}>
                <Text style = {styles.captionText}>
                {this.props.post.caption}
                </Text>
                </View>
                </View></View>

    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  cardContainer:{
    margin:10,
    backgroundColor:"purple",
    borderRadius:10,
    padding:10
  },
  authorNameContainer:{
    flex:1,
    justifyContent:'center',
  },
  authorNameText:{
    fontSize:20
  },
  postImage:{
    marginTop:10,
    resizeMode :'contain',
    width:"100%",
    alignSelf:'center',
    height:275
  },
  captionText:{
    paddingTop:10,
  }
});





















