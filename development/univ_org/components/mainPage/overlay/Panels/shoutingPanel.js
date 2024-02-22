import React from 'react';

import {View,StyleSheet,Text} from 'react-native';
import Pbtn from './pBtn';

function ShoutingPanel() {
  return( 
    <>
    <View style={styles.panel}>
        <View style={styles.pBodies}>
            <View style={[styles.pBody, styles.pDropShadow]}>

            </View>
            <View style={styles.pBtns}>
                <Pbtn btnColor="white" image={require('./assets/pBtn/setting.png')}/>
                <Pbtn btnColor="#1C4B95" image={require('./assets/pBtn/makeshout.png')} />
            </View>
        </View>
    </View>
    
    </>
    );
  
}

const styles = StyleSheet.create({
    panel: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 60,

    },
    pBodies:{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    pBody:{
        width: 349,
        height: 56,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        

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
    
  });
  
export default ShoutingPanel;