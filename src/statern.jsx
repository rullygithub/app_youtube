import React, { useState } from "react";
import { Button, View, Text } from "react-native";

const StateRN = props => {
    const [isHungry, setIsHungry] = useState(true)

    return (
        <View>
            <Text>Hy, I'am {props.name} and i am {isHungry ? 'Hungry' : 'Full'} !</Text>

            <Button onPress={() => {
                setIsHungry(false)
            }} disabled={!isHungry} title={isHungry ? 'Give me some drink, please!' : 'Thank Yout'}>
                
            </Button>
        </View>
    )
}

const StateName = () => {
    return (
        <View>
            <StateRN name="Jack"/>
            <StateRN name="Alex"/>
        </View>
    )
}

export default StateName;