import React from 'react';

import {View,StyleSheet,Text} from 'react-native';
import TopPanel from './topPanel/topPanel';
import BestFriends from './middlePanel/bestFriends';
import Friends from './bottomPanel/friends';
import NavDisplayBar from '../mainPage/overlay/navDisplayBar';




function FriendsPage() {
  return( 
    <>
    <View style={styles.body}>
      <View style={styles.top}>
          <TopPanel/>
      </View>
      <View style={styles.mid}>
          <BestFriends/>
      </View>
      <View style={styles.bottom}>
          <Friends/>
      </View>
    </View>
    <NavDisplayBar loc={0}/>
    </>
    );
  
}

const styles = StyleSheet.create({
    body: {
      flex:1,
      //backgroundColor:'blue',
    },
    top: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 80,
      marginBottom: 18,
      height: 60,
      //borderRadius:5,
      paddingHorizontal: 24,
    },
    mid: {
      display: 'flex',
      flexDirection: 'column',
      height: 200,
    },
    bottom: {
      display: 'flex',
      flexDirection: 'column',
      height: 200,
    },
  });
  
export default FriendsPage;