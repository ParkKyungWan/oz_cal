import React from 'react';

import {View,StyleSheet,Text, Image } from 'react-native';

function BestFriends() {
  return( 
    <>
    <View style={styles.body}>
      <Text>친한 친구 2명</Text>
      <Text>설정하기 </Text>
    </View>
    </>
    );
  
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'salmon',
    },
  });
  
export default BestFriends;