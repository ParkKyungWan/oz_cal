/* 횃불이 캐릭터 버튼(위치 공개 범위 지정용) */

import React from 'react';
import {View,StyleSheet,Image} from 'react-native';

function FireMan() {
  return( 
    <>
    <View style={styles.body}>
        <Image 
            style={styles.fireman}
            source={require('./assets/charactor/fireman.png')}
        />
    </View>
    </>
    );
  
}

const styles = StyleSheet.create({
    body: {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      bottom: 10,
      width: '100%',
      justifyContent:'center', 
    },
    fireman: {
        width: 52,
        height: 103,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowOffset: {
            width:0,
            height:4
        },
        shadowRadius: 4,
        overflow: 'visible',
    }
  });
  
export default FireMan;