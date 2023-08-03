import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Parent from './renderComponent'
import ParentProps from './props'

const Main = () => {
  return (
    <View>
      <ParentProps/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})