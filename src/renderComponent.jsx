import React from "react";
import {Text, View} from 'react-native'


const Child = () => {
    return (
        <View>
            <Text>Hello, I am Child Component</Text>
        </View>
    )
}

const Parent = () => {
    return (
        <View>
            <Text>Parent Component</Text>
            <View>
                <Child/>
            </View>
        </View>
    )
}


export default Parent;