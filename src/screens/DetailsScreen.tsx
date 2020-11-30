import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Context } from "../context/Provider"

type PropsType = {
  navigation: any
}

const DetailScreen: React.FC<PropsType> = ({ navigation }) => {

  const [arrDepense, setArrDepense] = useState<array>([])
  const { state, dispatch } = useContext(Context)

  const onPressText = () => {
    navigation.navigate("")
  }

  const addDepense = () => {
    dispatch({
      type: "UPDATE_REVENU",
      payload: 10,
    })
    setArrDepense([...arrDepense, 10])
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Votre revenu : {state.revenu}€</Text>
      {arrDepense.map((item, index) => {
        return (
          <View key={index}>
            <Text>Nouvelle dépense : +10€</Text>
          </View>
        )
      })}
      <Button title="Ajouter une dépense" onPress={addDepense} />
    </View>
  )
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