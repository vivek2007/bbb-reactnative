import React from 'react'
import { StyleSheet, Text, View, TextStyle } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import {fontSize} from '../../helpers/sizes'

const AppText = ({children, style}) => {
  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  )
}

export default AppText

const styles = ScaledSheet.create({
  text: {
    fontSize: fontSize.largex,
    color: "#fff"
  }
})
