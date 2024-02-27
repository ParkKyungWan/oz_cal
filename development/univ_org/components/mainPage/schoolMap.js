import React, { useState, useRef,useEffect } from 'react';
import { StyleSheet,Image } from 'react-native';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView, {Marker} from 'react-native-maps';


/*
맵뷰 레퍼런스
https://docs.expo.dev/versions/latest/sdk/map-view/
*/

const SchoolMap = props =>{


  /* 지도 구현을 위한 부분*/

    const [mapStyle, setmapStyle] = useState([
        {
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.neighborhood",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.school",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#1c4b95"
              },
              {
                "saturation": -85
              },
              {
                "lightness": 85
              }
            ]
          },
          {
            "featureType": "poi.school",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#444444"
              },
              {
                "weight": 5
              }
            ]
          },
          {
            "featureType": "road",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            featureType: "landscape.man_made.building",
            elementType: "geometry.fill",
            stylers: [ { color: "#000000"},{"lightness": 82} ]
        },
        {
            "featureType": "landscape.man_made.building",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility":"on",
                    "color": "#444444"
                }
            ]
        }
       
    ])
    

    const reloadmapView = ()=>{
      props.mapRef.current.animateCamera({
        center: {
          latitude: 37.3751106262207,
          longitude: 126.63219451904297,
        },
        pitch: 85,
        zoom: 17.5,
      })
    }
    useEffect(() => {
      reloadmapView();
    }, []); 

    const moveTomyLoc = () =>{
      setmapRegion({
          latitude: 37.3751106262207,
          longitude: 126.63219451904297,
          latitudeDelta: 0.0028,
          longitudeDelta: 0.0028,
      });
  }
    return( 
      <>

      <MapView
        ref={ props.mapRef }
        provider={PROVIDER_GOOGLE}r
        customMapStyle={mapStyle}
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={props.mapRegion}
      >

        <Marker
          coordinate={{latitude: 37.3751106262207, longitude: 126.63219451904297}}
        >
          <Image 
            style={styles.locspot}
            source={require('./assets/mapIcons/locspot.png')} />
        </Marker>
      </MapView>
      </>
    
    );
  
}

const styles = StyleSheet.create({
  locspot: {
    width: 44,
    height: 44,
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
  
export default SchoolMap;

/*
## 맵뷰 Methods

https://unpkg.com/browse/react-native-maps@0.30.1/docs/mapview.md

*/