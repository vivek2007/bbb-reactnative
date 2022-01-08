import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Block} from 'galio-framework';
import {Shadow} from 'react-native-shadow-2';

const Input = ({
  value,
  onChangeText,
  placeholder = 'Email',
  password,
  iconName = 'email',
  iconContent,
}) => {
  return (
    // <Block row center shadow shadowColor="#BEBEBF" height={40} card>
    <Shadow distance={3} viewStyle={styles.container}>
      {!iconContent && (
        <View style={{marginRight: 7}}>
          <MCIcons name={iconName} size={20} color={'grey'} />
        </View>
      )}
      {iconContent && iconContent}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.textInput}
        secureTextEntry={password}
        placeholderTextColor={'grey'}
      />
      {/* //{' '} */}
    </Shadow>
    // </Block>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    // height: 40,
    // elevation: 2,
    color: '#000',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    // paddingVertical: 3,
    borderRadius: 5,
    height: 45,
    backgroundColor: '#fff',
  },
});
