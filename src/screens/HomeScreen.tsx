import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type PropsType = {
  navigation: any
  header: any
}

const HomeScreen: React.FC<PropsType> = ({ navigation}) => {

  const onPressToProfil = () => {
    navigation.navigate("Profil")
  }
  const onPressToDetails = () => {
    navigation.navigate("Details")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Text>Bienvenue sur le 'HomeScreen'</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={onPressToProfil}>
        <Text>Vers 'Profil'</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressToDetails}>
        <Text>Vers 'Account'</Text>
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

export default HomeScreen