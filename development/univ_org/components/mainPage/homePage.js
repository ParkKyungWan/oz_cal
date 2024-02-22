import React from 'react';

import {View,StyleSheet,Text} from 'react-native';
import SchoolMap from './schoolMap';
import NavDisplayBar from './overlay/navDisplayBar';
import FireMan from './overlay/fireMan';
import ShoutingPanel from './overlay/Panels/shoutingPanel';

function HomePage() {
  return( 
    <>
    <View style={styles.body}>
      <SchoolMap/>
    </View>
    <ShoutingPanel/>
    <FireMan/>
    <NavDisplayBar loc={1} />
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
  
export default HomePage;