import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

type PropsType = {
  navigation: any
}

const LoginScreen: React.FC<PropsType> = ({ navigation }) => {

  const onPressText = () => {
    navigation.navigate("Home")
  }

  return (
    <View style={{backgroundColor :'red'}}>
      <StatusBar style="auto" />
        <Button title='Connexion'
        onPress={onPressText}/>
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

export default LoginScreen