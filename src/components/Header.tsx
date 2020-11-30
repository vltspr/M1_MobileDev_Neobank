import React, { useContext } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { Context } from "../context/Provider"

type PropsType = {
  title: string,
  navigation: any
}

const Header: React.FC<PropsType> = ({ title, navigation }) => {

  const { state , dispatch } = useContext(Context)

  const onPressImg = () => {
    navigation.navigate("Profil")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPressImg}>
        <Image
          source={{
            uri: state.imgProfil,
          }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-between',
    flexDirection: "row"
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "700"
  }
})