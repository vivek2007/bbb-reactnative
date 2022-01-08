import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import {ms, ScaledSheet} from 'react-native-size-matters'

import {fontSize} from '../../helpers/sizes'

import AppText from './AppText'

const AppButton = ({title, onPress, btnStyle}) => {
  return (
    <Pressable onPress={onPress} style={[styles.btn, btnStyle]}>
      <AppText style={styles.txt}>{title}</AppText>
    </Pressable>
  )
}

export default AppButton

const styles = ScaledSheet.create({
  btn: {
    height: "40@ms",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: "20@ms",
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#fff",
    paddingHorizontal: "15@ms",
    paddingVertical: "10@ms"
  },
  txt: {
    fontSize: fontSize.small
  }
})
