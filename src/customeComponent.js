import React from "react";
import {Text, TextInput, View} from 'react-native'

const CustomeComponent = () => {
    return (
        <View>
            <Text>Hello, Insert Name Bellow</Text>
            <TextInput defaultValue="Your Name" style={{
                height: 40,
                borderColor: 'grey',
                borderWidth: 1,
                marginHorizontal: 10,
                marginVertical:20
            }}/>
        </View>
    )
}

export default CustomeComponent;