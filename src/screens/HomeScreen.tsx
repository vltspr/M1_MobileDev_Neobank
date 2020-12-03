import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

type PropsType = {
  navigation: any
  header: any
}

const HomeScreen: React.FC<PropsType> = ({ navigation }) => {

  const onPressToProfil = () => {
    navigation.navigate("Profil")
  }
  const onPressToDetails = () => {
    navigation.navigate("Details")
  }

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.homeText}>Bienvenue sur Neobank</Text>
      </View>
      
      <View style={styles.navigation}>
          <Button title={"Vers 'Profil'"} onPress={onPressToProfil}/>
          <Button title={"Vers 'Account'"} onPress={onPressToDetails}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navigation: {
    marginHorizontal: 30,
    marginBottom:20,
    backgroundColor: "#e5e5e5",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  homeText: {
    height:50,
    textAlignVertical: "center",
    textAlign: "center"
  }
})

export default HomeScreen