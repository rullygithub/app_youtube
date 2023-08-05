import React from "react";
import {View, Text, Image} from 'react-native'

const Images = () => {
    return (
        <View>
            <Image source={{uri: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=878&q=80'}} style={{width: 200, height: 200}}/>


            <Text>Hello, i'am Robot</Text>
        </View>
    )
}

export default Images;