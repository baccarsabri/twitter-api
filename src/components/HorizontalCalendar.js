import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import Colors from '../constants/Colors';
import {fonts} from '../../assets';
import { scale } from 'react-native-size-matters';
import {vertical} from '../helpers/dimensions';
import moment from 'moment';

const HorizontalCalendar = ({  props,selectedDate,calendarStripRef,
  onPress = (date) => {},}

) => {
  
 useEffect(()=>{

  console.log('selected date',selectedDate);

 // calendarStripRef.current.setSelectedDate(selectedDate);
 },[]);





  return (
    <View>
  
      <CalendarStrip
        numDaysInWeek={6}
        scrollable={true}
        ref={calendarStripRef}
        dayComponentHeight={65}
        shouldAllowFontScaling={true}
        onDateSelected={onPress}
        selectedDate={selectedDate}
        scrollToOnSetSelectedDate={true}
        
       
      
        {...styles}
      />
    </View>
  );
}

export default HorizontalCalendar;

const styles = StyleSheet.create({
  highlightDateNumberStyle: {
    color: Colors.purple,
    fontFamily: fonts.Semibold,
    fontSize: scale(16),
  },
  highlightDateNameStyle: {
    color: Colors.purple,
    fontFamily: fonts.Regular,
    fontSize: scale(12),
  },
  style: {
    height: 120,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight:18,
    marginTop: vertical(5),
  },
  calendarHeaderStyle: {
    color: Colors.WHITE,
    fontFamily: fonts.Semibold,
    fontSize: scale(20),
  },
  dateNumberStyle: {
    color: Colors.WHITE,
    fontFamily: fonts.Semibold,
    fontSize: scale(14),
  },
  dateNameStyle: {
    color: Colors.WHITE, 
    fontFamily: fonts.Regular,
    fontSize: 12
  },
  iconContainer: {display: 'none'},
  calendarHeaderContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  dayContainerStyle: {
    backgroundColor: Colors.darkPurple,
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 5
  },
  highlightDateContainerStyle: {
    backgroundColor: Colors.WHITE
  },
 

});
