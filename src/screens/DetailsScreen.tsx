import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Context } from "../context/Provider"

type PropsType = {
  navigation: any
  amout: number
}

const DetailScreen: React.FC<PropsType> = ({ navigation }) => {

  const [arrDepense, setArrDepense] = useState<array>([])
  const { state, dispatch } = useContext(Context)


  const addDepense = (amount) => {
    dispatch({
      type: "UPDATE_REVENU",
      payload: amount,
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
            <Text>Nouvelle dépense : +10</Text>
          </View>
        )
      })}
      <Button title="Ajouter un revenus" onPress={() =>
        Alert.prompt("Montant", "Veuillez renseigner le montant du revenus", amount => addDepense(parseInt(amount)))
      }
      />
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