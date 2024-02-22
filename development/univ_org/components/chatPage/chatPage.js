import React from 'react';

import {View,StyleSheet,Text} from 'react-native';

function ChatPage() {
  return( 
    <>
    <View style={styles.body}>
        
    </View>
    <NavDisplayBar loc={2} />
    </>
    );
  
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
  });
  
export default ChatPage;