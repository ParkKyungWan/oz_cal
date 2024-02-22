import {React,useState,useRef} from 'react';

import {View,StyleSheet,Text} from 'react-native';
import SchoolMap from './schoolMap';
import NavDisplayBar from './overlay/navDisplayBar';
import FireMan from './overlay/fireMan';
import ShoutingPanel from './overlay/Panels/shoutingPanel';
import MapPanel from './overlay/Panels/MapPanel';

function HomePage() {

  const [mapRegion, setmapRegion] = useState({
    latitude: 37.3751106262207,
    longitude: 126.63219451904297,
    latitudeDelta: 0.0028,
    longitudeDelta: 0.0028,
    });

  const mapViewRef = useRef(null);

  const mapInfo = {
    'region' : mapRegion,
    'setRegion' : setmapRegion,
    'ref': mapViewRef,

  }
  return( 
    <>
    <View style={styles.body}>
      <SchoolMap mapRegion={mapRegion} mapRef={mapViewRef}/>
    </View>
    <ShoutingPanel/>
    <FireMan/>
    <MapPanel mapInfo={mapInfo} />
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