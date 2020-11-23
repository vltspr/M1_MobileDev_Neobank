import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type PropsType = {
  navigation: any
  header: any
}

const DetailScreen: React.FC<PropsType> = ({ navigation}) => {

  const onPressText = () => {
    navigation.navigate("")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={onPressText}>
        <Text>Bienvenue sur 'DetailScreen'</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default DetailScreen