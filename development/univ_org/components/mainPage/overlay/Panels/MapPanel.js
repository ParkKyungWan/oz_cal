import {React,useState} from 'react';

import {View,StyleSheet,Text, TouchableOpacity} from 'react-native';
import Pbtn from './pBtn';

const MapPanel = props => {

    const onPressMyloc = () =>{
        props.mapInfo['ref'].current.animateCamera({
            center: {
              latitude: 37.3751106262207,
              longitude: 126.63219451904297,
            },
          })
    }
  return( 
    <>

    <View style={styles.pDownPanel}>
        <View style={styles.pBodies}>
            <View style={styles.pBtns}>
                <Pbtn btnColor="white" image={require('./assets/pBtn/myloc.png')} func={onPressMyloc}/>
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