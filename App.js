import React,{useEffect, useState} from "react"
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native"
import Torch from "react-native-torch"
import RNShake from 'react-native-shake'

const App = () => {
  const [toggle,setToggle] = useState(false)
  const hundleChangeToggle = () => setToggle(oldToggle => !oldToggle)
  useEffect(()=>{
    Torch.switchState(toggle)
  },[toggle])

  useEffect(()=>{
    const subscription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle)
    })
    return() => subscription.remove;
  },[])
  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={hundleChangeToggle}>
        <Image style={toggle ? styles.lightingOn : styles.lightingOff} source={toggle ? require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png')} />
        <Image style={styles.dioLogo} source={toggle ? require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center"
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center"
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  }
})