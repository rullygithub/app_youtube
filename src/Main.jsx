import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Parent from './renderComponent'
import ParentProps from './props'
import Images from './images'
import StateName from './statern'

const Main = () => {
  return (
    <View>
      {/* <Images/> */}
      {/* <ParentProps/> */}
      <StateName />
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})