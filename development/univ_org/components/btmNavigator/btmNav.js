import React from 'react';

/* 하단 네비게이션 바 구현용 라이브러리 */
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Text,Image} from 'react-native';
import HomePage from '../mainPage/homePage';
import FriendsPage from '../friendsPage/friendsPage';

const Tab = createBottomTabNavigator();



function ChatScreen() {
    return <Text>chat</Text>;
}


function BtmNav() {
/*
네비게이터 옵션 관련 레퍼런스
https://reactnavigation.org/docs/bottom-tab-navigator/
*/
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" 
      screenOptions={{
         headerShown: false,
         tabBarStyle: {
            backgroundColor: "#FFF",
            height: 89,
         },
         tabBarActiveTintColor: '#1C4B95',
         tabBarInactiveTintColor: '#D8D8D8',
         tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Friends"
          component={FriendsPage}
          options={{
            title: '친구목록',
            tabBarIcon: ({color}) => (
              <Image 
              source={require('./icons/icon_friends.png')}
              tintColor={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            title: '홈',
            tabBarIcon: ({color}) => (
                <Image 
                source={require('./icons/icon_home.png')}
                tintColor={color}
                />
              ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: '채팅',
            tabBarIcon: ({color}) => (
                <Image 
                source={require('./icons/icon_chat.png')}
                tintColor={color}
                />
              ),
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

export default BtmNav;