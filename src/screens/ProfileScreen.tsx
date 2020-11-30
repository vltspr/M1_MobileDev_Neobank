import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Context } from "../context/Provider"

type PropsType = {
  navigation: any
  header: any
}

const ProfileScreen: React.FC<PropsType> = ({ navigation}) => {

  const { state , dispatch } = useContext(Context)

  const onPressText = () => {
    navigation.navigate("")
  }
  
  const onPressChangePhoto = () => {
    if (state.profilName === "theo")
      dispatch({
        type: "UPDATE_PHOTO_PROFIL",
        payload: ["https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/50762709_10210994879822694_2876704880804757504_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=1tBZM8OadtIAX86X2LT&_nc_ht=scontent-cdg2-1.xx&oh=b240c5eaf060b99d1e5b467920739c73&oe=5FE3D46C", "corentin"],
      })
    else {
      dispatch({
        type: "UPDATE_PHOTO_PROFIL",
        payload: ["https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/18835535_854405988045540_4686398475279015689_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=zEsZ7X-ipJsAX-9JUym&_nc_ht=scontent-cdt1-1.xx&oh=f2f95903fc2b703d4290ceedea32feb2&oe=5FE6BA22", "theo"],
      })
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={onPressText}>
        <Text>Bienvenue sur 'ProfileScreen' !</Text>
      </TouchableOpacity>
      <Button title="Changer photo de profil" onPress={onPressChangePhoto} />
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

export default ProfileScreen