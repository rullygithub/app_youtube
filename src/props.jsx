import React from "react";
import {View, Text} from 'react-native'

const ChildProps = (props) => {
    return (
        <View>
            <Text>
                Hello, I'am {props.name}
            </Text>
        </View>
    )
}


const ParentProps = () => {
    return (
        <View>
            <ChildProps name="Jack"/>
            <ChildProps name="Josh"/>
            <ChildProps name="Alex"/>
        </View>
    )
}


export default ParentProps;

