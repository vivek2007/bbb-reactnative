import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ms, ScaledSheet, vs } from 'react-native-size-matters';
import Icons from 'react-native-vector-icons/Ionicons';

import { iconSize } from '../../helpers/sizes';

import { sizes } from '../../helpers';
import AppText from './AppText';

const Header = ({ onPressSearch, onPressOption, onPressNotification }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Icons name="chevron-back" color={'#fff'} size={iconSize.regular} />
        <AppText>Meet</AppText>
      </View>
      <View style={styles.rightContainer}>
        <Pressable onPress={onPressSearch}>
          <Icons name="search" size={iconSize.regular} color={'#fff'} />
        </Pressable>
        <Pressable onPress={onPressNotification}>
          <Icons name="notifications" size={iconSize.regular} color={'#fff'} />
        </Pressable>
        <Pressable onPress={onPressOption}>
          <Icons
            name="md-ellipsis-vertical"
            size={iconSize.regular}
            color={'#fff'}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = ScaledSheet.create({
  container: {
    height: '55@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '7@ms',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around',
  },
});
