import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const Screen = ({ children }) => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222020',
  },
});
