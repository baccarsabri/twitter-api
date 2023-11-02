import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import {fonts} from '../../assets';

const colorIndex = [
  {
    name: 'green',
    color: Colors.status.green,
    backgroundColor: Colors.status.lightGreen,
  },
  {
    name: 'blue',
    color: Colors.status.blue,
    backgroundColor: Colors.status.lightBlue,
  },
  {
    name: 'orange',
    color: Colors.status.orange,
    backgroundColor: Colors.status.lightOrange,
  },
  {
    name: 'red',
    color: Colors.status.red,
    backgroundColor: Colors.status.lightRed,
  },
];

export default function InvoiceCard({
  title,
  time,
  timeRange,
  status,
  index,
  onPress,
  item,
}) {
  const styles = style({index});

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <View style={styles.timeBox}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.hour}>hours</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.caption}>{timeRange}</Text>
      </View>
      <View style={styles.rightBox}>
        <Text style={styles.status}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = ({index}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 90,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      paddingHorizontal: 15,
      backgroundColor: Colors.WHITE,
      shadowColor: Colors.BLACK,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      marginBottom: 20,
    },
    timeBox: {
      width: 60,
      height: 60,
      backgroundColor: colorIndex[index % colorIndex.length].backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginRight: 16,
    },
    time: {
      fontSize: 18,
      fontFamily: fonts.Semibold,
      color: colorIndex[index % colorIndex.length].color,
    },
    hour: {
      fontSize: 14,
      color: colorIndex[index % colorIndex.length].color,
      fontFamily: fonts.Regular,
    },
    title: {
      fontFamily: fonts.Semibold,
      fontSize: 16,
      color: Colors.darkBlue,
    },
    caption: {
      fontFamily: fonts.Regular,
      fontSize: 16,
      color: Colors.gray,
    },
    rightBox: {
      height: 60,
      alignItems: 'flex-end',
    },
    status: {
      marginTop: 8,
      fontFamily: fonts.Regular,
      fontSize: 16,
      color: Colors.orange,
    },
  });
