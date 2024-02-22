import React from 'react';

import {View,StyleSheet,Text} from 'react-native';


function Friends() {
  return( 
    <>
    <View style={styles.body}>
      <Text>등교 중</Text>
      <Text>모든 친구</Text>
    </View>
    </>
    );
  
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'yellow',
    },
  });
  
export default Friends;