import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationName from '../constants/NavigationName';
import {Diary, Message, Payments, Pupils, Setting, Schools, StudentHome} from '../screens';
import {verticalScale} from 'react-native-size-matters';
import LocalStorageKey from '../constants/LocalStorageKey';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/Colors';
import {Image, StyleSheet} from 'react-native';
import Images from '../constants/Images';
import OwnPayment from '../screens/bottomTab/ownPayment';
const Tab = createBottomTabNavigator();

const BottomTabStack = () => {

  const dispatch = useDispatch();

  const getUserType = async () => {
      const usertype = await AsyncStorage.getItem(LocalStorageKey.usertype);

      setState({...state, userType: usertype});
  };

  const [state, setState] = useState({
    userType: 'student'
  });


  useEffect(() => {
    getUserType();
  }, []);


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tab,
      }}>      
      {state.userType == 'student' ? (
        <>
        <Tab.Screen
        name={NavigationName.STUDENT_HOME}
        component={StudentHome}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Image
                  source={Images.BottomHomeActive}
                  style={styles.imgActive}
                />
              ) : (
                <Image source={Images.BottomHome} style={styles.imgInActive} />
              )}
            </>
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name={NavigationName.SCHOOLS}
        component={Schools}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Image
                  source={Images.BottomPupilsActive}
                  style={styles.imgActive}
                />
              ) : (
                <Image
                  source={Images.BottomPupils}
                  style={styles.imgInActive}
                />
              )}
            </>
          ),
          title: '',
        }}
      />
         <Tab.Screen
        name={NavigationName.OWN_PAYMENT}
        component={OwnPayment}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Image
                  source={Images.BottomPaymentActive}
                  style={styles.imgActive}
                />
              ) : (
                <Image
                  source={Images.BottomPayment}
                  style={styles.imgInActive}
                />
              )}
            </>
          ),
          title: '',
        }}
      />
      </>
      ): (
        <>
        <Tab.Screen
        name={NavigationName.DIARY}
        component={Diary}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Image
                  source={Images.BottomDiaryActive}
                  style={styles.imgActive}
                />
              ) : (
                <Image source={Images.BottomDiary} style={styles.imgInActive} />
              )}
            </>
          ),
          title: '',
        }}
      />
        <Tab.Screen
        name={NavigationName.PUPILS}
        component={Pupils}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Image
                  source={Images.BottomPupilsActive}
                  style={styles.imgActive}
                />
              ) : (
                <Image
                  source={Images.BottomPupils}
                  style={styles.imgInActive}
                />
              )}
            </>
          ),
          title: '',
        }}
        
      />
       <Tab.Screen
        name={NavigationName.PAYMENT}
        component={Payments}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Image
                  source={Images.BottomPaymentActive}
                  style={styles.imgActive}
                />
              ) : (
                <Image
                  source={Images.BottomPayment}
                  style={styles.imgInActive}
                />
              )}
            </>
          ),
          title: '',
        }}
      />
      </>
        )}
     
      {/* 
      <Tab.Screen
        name={NavigationName.MESSAGE}
        component={Message}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Image
                  source={Images.BottomMessageActive}
                  style={styles.imgActive}
                />
              ) : (
                <Image
                  source={Images.BottomMessage}
                  style={styles.imgInActive}
                />
              )}
            </>
          ),
          title: '',
        }}
      />
*/}
      <Tab.Screen
        name={NavigationName.SETTING}
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Image
                  source={Images.BottomSettingActive}
                  style={styles.imgActive}
                />
              ) : (
                <Image
                  source={Images.BottomSetting}
                  style={styles.imgInActive}
                />
              )}
            </>
          ),
          title: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
const styles = StyleSheet.create({
  tab: {
    backgroundColor: Colors.THEME_COLOR1,
    height: verticalScale(60),
    paddingTop: verticalScale(9),
    borderTopLeftRadius: verticalScale(15),
    borderTopRightRadius: verticalScale(15),
  },
  imgActive: {
    width: verticalScale(25),
    height: verticalScale(35),
    resizeMode: 'contain',
  },
  imgInActive: {
    width: verticalScale(22),
    height: verticalScale(21),
    resizeMode: 'contain',
  },
});
