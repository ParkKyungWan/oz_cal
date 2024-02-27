import {React,useState,useRef} from 'react';

import {View,StyleSheet,Text} from 'react-native';
import SchoolMap from './schoolMap';
import NavDisplayBar from './overlay/navDisplayBar';
import FireMan from './overlay/fireMan';
import ShoutingPanel from './overlay/Panels/shoutingPanel';
import MapPanel from './overlay/Panels/MapPanel';


//반복실행함수
import useInterval from './util/useInterval';

//토스트메세지 라이브러리
import Toast from 'react-native-toast-message';
import { toastConfig } from './ToastConfig';


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
  useInterval(() => {
    Toast.show({
      type: 'FiremanToast',
      text1: '모든 친구에게 ',
      text2: '위치를 공유하고 있어요'
    });
    
  }, 3000);

  return( 
    <>
    <View style={styles.body}>
      <SchoolMap mapRegion={mapRegion} mapRef={mapViewRef}/>
    </View>
    <ShoutingPanel/>
    <FireMan/>
    <MapPanel mapInfo={mapInfo} />
    <NavDisplayBar loc={1} />

    <Toast
      config={toastConfig}
      position='bottom'
      visibilityTime={2500}
      swipeable={false}
      bottomOffset={0}/>
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