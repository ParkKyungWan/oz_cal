import React from 'react';

import {View,StyleSheet,Text, TouchableOpacity} from 'react-native';


function TopPanel() {
  return( 
    <>
    <View style={styles.body}>
      
      
    </View>
    </>
    );
  
}

const styles = StyleSheet.create({
    body: {
      flex:1,
      flexDirection: "row",
      //display: 'flex',
      //flexDirection: 'column',
      backgroundColor: 'green',
      justifyContent:"space-between"
    },
    btnText:{
      fontSize: 16

    }
  });
  
export default TopPanel;