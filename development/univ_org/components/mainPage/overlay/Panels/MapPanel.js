/* 폴더가 꼬였지만 map의 하위 컴포넌트입니다 */

import {React,useState} from 'react';

import {View,StyleSheet,Text} from 'react-native';
import Pbtn from './pBtn';

const MapPanel = props => {
  return( 
    <>

    <View style={styles.pDownPanel}>
        <View style={styles.pBodies}>
            <View style={styles.pBtns}>
                <Pbtn btnColor="white" image={require('./assets/pBtn/myloc.png')} />
            </View>
        </View>
    </View>
    </>
    );
  
}

const styles = StyleSheet.create({
    pBodies:{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    pBtns:{
        width: 349,
        display: 'flex',
        flexDirection: 'row-reverse',
        gap: 8,
    },
    pDropShadow:{
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowOffset: {
            width:0,
            height:4
        },
        shadowRadius: 4,
        overflow: 'visible',
    },
    pDownPanel:{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 16,
    }
  });
  
export default MapPanel;