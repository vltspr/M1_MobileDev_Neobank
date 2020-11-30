import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useContext } from 'react';
import Converter from "../components/Converter"
import { StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native';
import { getLastest } from '../api/ApiRequest';
import { Context } from "../context/Provider"

type PropsType = {
  navigation: any
}

const DeviseScreen: React.FC<PropsType> = ({ navigation }) => {

  const [selectUnit, setSelectUnit] = useState<array>(["Chargement...", ""])
  const [arrUnits, setArrUnits] = useState<any>(null)
  const { state, dispatch } = useContext(Context)

  const onPressText = () => {
    navigation.navigate("")
  }

  useEffect(() => {
    const result = getLastest("EUR")
    result.then(res => {
      setArrUnits(Object.entries(res.data.rates))
  })
  .catch((err) =>{
      console.log(err)
  })
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Picker
        selectedValue={selectUnit}
        style={{ height: 50, width: 150 }}
        onValueChange={(item) => setSelectUnit(item)}
      >
        {arrUnits?.map(item => {
          return <Picker.Item label={item[0]} value={item} key={item[0]} />
        })}
      </Picker>
      <Converter somme={state.revenu} newUnit={selectUnit[1]} unitName={selectUnit[0]} />
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

export default DeviseScreen